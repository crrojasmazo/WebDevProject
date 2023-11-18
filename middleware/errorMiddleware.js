module.exports = (err, req, res, next) => {
  res.status(res.statusCode < 400 ? 400 : res.statusCode || 500).send({
    message: err.message,
    stack: err.stack,
  });
};
