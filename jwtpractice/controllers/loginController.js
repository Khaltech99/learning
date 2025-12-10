import bcrypt from "bcrypt";
import User from "../model/userModel.js";
import jwt from "jsonwebtoken";

const secret = process.env.SECRET;

const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ message: "No email, or Password" });

    const foundUser = await User.findOne({ email });

    if (!foundUser) return res.status(400).json({ message: "No user found" });

    const correctPassword = await bcrypt.compare(password, foundUser.password);

    if (!correctPassword)
      return res.status(400).json({ message: "incorrect email or password" });

    const sentToken = jwt.sign(
      { id: foundUser._id, email: foundUser.email },
      secret,
      {
        expiresIn: "2h",
      }
    );

    return res
      .status(200)
      .json({ message: "user logged in successfully", token: sentToken });
  } catch (err) {
    res.status(500).json({ message: "Unable to login user", err });
  }
};

// will get back to this

export default loginController;
