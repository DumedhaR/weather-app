// wraps async route handlers to catch errors and send them to the error handler, avoiding repetitive try-catch blocks.
const asyncHandler = (fn) => (req, res, next) => {
  fn(req, res, next).catch(next);
};

module.exports = asyncHandler;
