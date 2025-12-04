const errorHandler = (err, req, res, next) => {
  if (err) {
    return res.status(err.status || 404).json({ msg: "invalid route" });
  }
  next();
};

export default errorHandler;
