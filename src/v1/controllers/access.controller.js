const accessService = require('../services/access.service');
const { sendSuccessResponse } = require('../core/sendres.core')

exports.register = async (req, res, next) => {
    sendSuccessResponse(await accessService.register(req.body)).send(res);
}

exports.login = async (req, res, next) => {
    sendSuccessResponse({
        metadata: await accessService.login(req.body)
    }).send(res);
}
