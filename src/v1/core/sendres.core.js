const StatusCode = {
    OK: 200,
    CREATED: 201,
    UNAUTHORIZED: 401,
    INTERNAL_SERVER_ERROR: 500
};

const ReasonStatusCode = {
    OK: 'Success',
    CREATED: 'Created!',
    UNAUTHORIZED: 'Unauthorized',
    INTERNAL_SERVER_ERROR: 'Internal Server Error'
};

const sendSuccessResponse = ({ message, statusCode = StatusCode.OK, reasonStatusCode = ReasonStatusCode.OK, metadata = {} }) => {
    const response = {
        message: !metadata.message ? reasonStatusCode : metadata.message,
        status: statusCode,
        metadata: metadata
    };
    return {
        send: (res) => res.status(statusCode).json(response)
    };
};
const sendErrorResponse = ({ message, statusCode = StatusCode.INTERNAL_SERVER_ERROR, reasonStatusCode = ReasonStatusCode.INTERNAL_SERVER_ERROR }) => {
    const response = {
        message: !message ? reasonStatusCode : message,
        status: statusCode
    };
    return {
        send: (res) => res.status(statusCode).json(response)
    };
};


const sendAuthErrorResponse = ({ message = 'Unauthorized', statusCode = StatusCode.UNAUTHORIZED, reasonStatusCode = ReasonStatusCode.UNAUTHORIZED }) => {
    const response = {
        message: !message ? reasonStatusCode : message,
        status: statusCode
    };
    return {
        send: (res) => res.status(statusCode).json(response)
    };
};

module.exports = {
    sendSuccessResponse,
    sendErrorResponse,
    sendAuthErrorResponse
};
