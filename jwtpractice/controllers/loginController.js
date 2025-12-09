import { user } from "../users.js";
import bcrypt from "bcrypt";

import jwt from "jsonwebtoken";

const secret = process.env.SECRET;

const loginController = async (req, res, next) => {
  if (!req.body) {
    return res.status(400).json({ message: "invalid body" });
  }

  const { email, password } = req.body;

  const foundUser = user.find((u) => u.email === email);

  if (!foundUser) {
    return res.status(400).json({ message: "user not found" });
  }

  const correctPassword = await bcrypt.compare(password, foundUser.password);

  if (!correctPassword) {
    return res.status(400).json({ message: "incorrect password" });
  }

  const sentToken = jwt.sign({ email: foundUser.email }, secret, {
    expiresIn: "2h",
  });

  return res
    .status(200)
    .json({ message: "user logged in successfully", token: sentToken });
};

// will get back to this

export default loginController;
