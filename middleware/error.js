const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
  console.log("Error handler");
  let error = { ...err };
  console.log(err.message);
  error.message = err.message;
  res.status(error.statusCode || 500).json({ success: false, error: error || "Server error" });
};

module.exports = errorHandler;
