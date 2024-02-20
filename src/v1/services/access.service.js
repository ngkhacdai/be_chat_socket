const userSchema = require('../models/user.model')
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const { createToken } = require('../auth/auth')

exports.register = async ({ email, username, password }) => {
    const hashPassword = await bcrypt.hash(password, 10)
    console.log(hashPassword);
    const publickey = await crypto.randomBytes(32).toString('hex')
    const user = await userSchema.create({ email, username, password: hashPassword, publickey })
    if (!user) {
        return {
            message: 'Đăng ký thất bại',
        }
    }
    return {
        message: 'Đăng ký thành công',
    }
}

exports.login = async ({ email, password }) => {
    const user = await userSchema.findOne({ email: email })
    if (!user) {
        return {
            message: 'Sai tài khoản hoặc mật khẩu',
            status: 401
        }
    }
    const checkPassword = await bcrypt.compare(password, user.password)
    if (!checkPassword) {
        return {
            message: 'Sai tài khoản hoặc mật khẩu',
        }
    }
    const token = createToken({ userId: user._id }, user.publickey)
    return {
        message: 'Đăng nhập thành công',
        token,
        userId: user._id
    }
}

