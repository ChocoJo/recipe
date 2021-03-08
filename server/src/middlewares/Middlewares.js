import dotenv from 'dotenv';

dotenv.config();
const { ENVIROMENT } = process.env;

const notFound = (request, response, next) => {
    const error = new Error("Invalid URL - NOT FOUND " + request.originalUrl);
    response.status(404);
    next(error);
}

const errorHandler = (error, request, response, next) => {
    const statusCode = response.statusCode === 200 ? 500 : response.statusCode;
    response.status(statusCode);
    response.json({
        statusCode: statusCode,
        message: error.message,
        stackTrace: ENVIROMENT === 'PRODUCTION' ? null : error.stack
    });
}

export default {
    notFound,
    errorHandler
}