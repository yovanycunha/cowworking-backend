const httpStatusCodes = require('http-status-codes');

const responses = () => {
  const notModifed = (message) => ({
    status: httpStatusCodes.StatusCodes.NOT_MODIFIED,
    message,
  });

  const internalError = () => ({
    status: httpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR,
    message: 'INTERNAL_ERROR',
  });

  const ok = (message, data) => ({
    status: httpStatusCodes.StatusCodes.OK,
    message,
    data,
  });

  const notFound = (message) => ({
    status: httpStatusCodes.StatusCodes.NOT_FOUND,
    message,
  });

  const created = (message, data) => ({
    status: httpStatusCodes.StatusCodes.CREATED,
    message,
    data
  });

  const conflict = (message) => ({
    status: httpStatusCodes.StatusCodes.CONFLICT,
    message,
  });

  const unauthorized = (message) => ({
    status: httpStatusCodes.StatusCodes.UNAUTHORIZED,
    message,
  });

  const badRequest = (message) => ({
    status: httpStatusCodes.StatusCodes.BAD_REQUEST,
    message,
  });

  return {
    notModifed,
    internalError,
    ok,
    notFound,
    created,
    conflict,
    unauthorized,
    badRequest,
  };
};

module.exports = responses();
