import { Router } from "express";
import User from "../../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const secret = process.env.SECRET;

if (!secret) {
  throw new Error("JWT SECRET is not defined");
}

const authRouter = Router();

/* REGISTER */
authRouter.post("/register", async (req, res) => {
  try {
    const { username, password, email } = req.body;

    if (!username || !password || !email) {
      return res.status(400).json({
        message: "No username, email or password provided",
      });
    }

    const normalizedEmail = email.toLowerCase().trim();

    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
      return res.status(409).json({
        message: "User with this email already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await User.create({
      username,
      email: normalizedEmail,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error("Register Error:", error);
    res.status(500).json({ message: "Register error" });
  }
});

/* LOGIN */
authRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Please provide email and password",
      });
    }

    const normalizedEmail = email.toLowerCase().trim();

    const foundUser = await User.findOne({ email: normalizedEmail });
    if (!foundUser) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const isMatch = await bcrypt.compare(password, foundUser.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign(
      { sub: foundUser._id.toString(), email: foundUser.email },
      secret,
      { expiresIn: "2h" }
    );

    res.status(200).json({ message: "User logged in", token });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Login error" });
  }
});

export default authRouter;
