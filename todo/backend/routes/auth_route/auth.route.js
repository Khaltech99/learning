import { Router } from "express";

import User from "../../models/user.model.js";
import bcrypt from "bcrypt";

import jwt from "jsonwebtoken";

const secret = process.env.SECRET;

const authRouter = Router();

authRouter.post("/register", async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const normalizeEmail = email.tolowerCase().trim();
    // check if the body is empty
    if (!username || !password || !normalizeEmail)
      return res
        .status(400)
        .json({ message: "No username, email  or password provided" });

    // check for existing user
    const existingUser = await User.findOne({ normalizeEmail });
    if (existingUser)
      return res
        .status(400)
        .json({ message: "user with the following email already exist" });

    // hash the password when its not empty and no duplicate user.
    const hashed_password = await bcrypt.hash(password, 12);
    // create the user

    const newUser = await User.create({
      username: username,
      email: normalizeEmail,
      password: hashed_password,
    });

    // sending extracted user to prevent password leakage
    const extractedUser = {
      username: newUser.username,
      email: newUser.email,
      id: newUser._id,
    };

    res
      .status(201)
      .json({ message: "user registered successfully", user: extractedUser });
  } catch (error) {
    res.status(500).json({ message: "Register error" });
  }
});

// login route
authRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const normalizedEmail = email.tolowerCase().trim();

    //  check if the user does not provide email and password
    if (!normalizedEmail || !password)
      return res
        .status(400)
        .json({ message: "Please provide email and password" });
    // get the user first
    const foundUser = await User.findOne({ normalizedEmail });

    if (!foundUser)
      return res.status(401).json({ message: "Invalid email or password" });

    // compare this password to the database password
    const isMatch = await bcrypt.compare(password, foundUser.password);

    // check if its not equal
    if (!isMatch)
      return res
        .status(400)
        .json({ message: "Either email or password does not match" });

    // check if the secret is active

    if (!secret) return new Error("the secret is not active");

    const token = jwt.sign(
      { id: foundUser._id, email: foundUser.normalizedEmail },
      secret,
      { expiresIn: "2h" }
    );

    res.status(200).json({ message: "User logged in", token });
  } catch (error) {
    res.status(500).json({ message: "Login error" });
  }
});

export default authRouter;
