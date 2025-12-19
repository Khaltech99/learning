// imports

import {
  loginUserService,
  registerUserServices,
} from "../services/auth.services.js";

// register user controller
export const registerUser = async (req, res) => {
  try {
    const { username, password, email } = req.body;

    const sanitizedEmail = email.toLowerCase().trim();

    // use the register services
    const user = await registerUserServices({
      username,
      password,
      email: sanitizedEmail,
    });

    res.status(201).json({
      message: "User registered successfully",
      user: user,
    });
  } catch (error) {
    console.error("Register Error:", error);
    res.status(500).json({ message: "Register error" });
  }
};

// login user controller
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // sanitize the email to avoid spaces and case
    const sanitizedEmail = email.toLowerCase().trim();

    const token = await loginUserService({ email: sanitizedEmail, password });

    if (!token) {
      return res.status(401).json({ message: "unable to login" });
    }

    res.status(200).json({ message: "User logged in", token });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Login error" });
  }
};
