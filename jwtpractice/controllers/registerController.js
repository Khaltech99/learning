import bcrypt from "bcrypt";
import User from "../model/userModel.js";

const registerController = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    // check for empty body
    if (!email || !password)
      return res
        .status(400)
        .json({ message: "No email, or password provided" });

    // Checking for duplicate user
    const existingUser = await User.findOne({ email });

    if (existingUser)
      return res.status(400).json({ message: "User Already exist" });

    // Create new user
    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await User.create({
      email,
      password: hashedPassword,
    });

    const response = {
      email: newUser.email,
      id: newUser._id,
      createdAt: newUser.createdAt,
    };

    return res
      .status(201)
      .json({ message: "user created success", user: response });
  } catch (err) {
    res.status(500).json({ message: "Error creating new user,", error: err });
  }
};

export default registerController;
