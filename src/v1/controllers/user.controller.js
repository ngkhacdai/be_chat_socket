const userService = require('../services/user.service')
const { sendSuccessResponse } = require('../core/sendres.core')

exports.search = async (req, res, next) => {
    sendSuccessResponse({
        metadata:
            await userService.search(req.body)
    }).send(res);
}
