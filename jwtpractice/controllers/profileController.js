const profileController = (req, res, next) => {
  res.status(200).json({ message: "token success", user: req.user });
  next();
};

export default profileController;
