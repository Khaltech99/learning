const errorFile = (status, msg) => {
  const error = new Error();
  error.status = status;
  error.message = msg;
};

export default errorFile;
