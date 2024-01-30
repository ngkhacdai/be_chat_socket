const jwt = require('jsonwebtoken')
const userSchema = require('../models/user.model')
const { sendAuthErrorResponse } = require('../core/sendres.core')
const checkAuth = async (req, res, next) => {
    const userId = req.headers.userid

    const findUser = await userSchema.findOne({ _id: userId })
    if (!findUser) {
        return sendAuthErrorResponse(res, {
            message: 'Bạn không có quyền truy cập vào',
            statusCode: 401
        })
    }
    const authorization = req.headers.authorization;
    try {
        const verifyToken = jwt.verify(authorization, findUser.publickey)
        if (!verifyToken) {
            return sendAuthErrorResponse(res, {
                message: 'Bạn không có quyền truy cập vào',
                statusCode: 403
            })
        }
        console.log(verifyToken);
        req.user = userId
        next()
    } catch (error) {
        return sendAuthErrorResponse(res, { message: 'Lỗi xác thực', statusCode: 500 });
    }
}

const createToken = (payload, publickey) => {
    const token = jwt.sign(payload, publickey, { expiresIn: '30 days' })
    return token
}

module.exports = {
    checkAuth, createToken
}