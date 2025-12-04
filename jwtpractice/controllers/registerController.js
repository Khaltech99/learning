import bcrypt from "bcrypt";
import { user } from "../users.js";

const registerController = async (req, res, next) => {
  if (!req.body) {
    return res.status(400).json({ message: "invalid body" });
  }

  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 12);

  user.push({
    email,
    password: hashedPassword,
  });

  return res.status(201).json({ user: user, message: "user created success" });
};

export default registerController;
