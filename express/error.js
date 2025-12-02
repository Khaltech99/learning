const error = (status, msg) => {
  const error = new Error(msg);
  error.status = status;
  return error;
};

export default error;
