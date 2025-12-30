// imports
import {
  loginUserService,
  registerUserServices,
} from "../services/auth.services.js";
import { customError } from "../utils/error.js";

// register user controller
export const registerUser = async (req, res, next) => {
  try {
    const { username, password, email } = req.body;

    // Validate required fields
    if (!username || !password || !email) {
      throw customError(400, "Username, password, and email are required");
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw customError(400, "Invalid email format");
    }

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
    next(error);
  }
};

// login user controller
export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Validate required fields
    if (!email || !password) {
      throw customError(400, "Email and password are required");
    }

    // sanitize the email to avoid spaces and case
    const sanitizedEmail = email.toLowerCase().trim();

    const token = await loginUserService({ email: sanitizedEmail, password });

    if (!token) {
      throw customError(401, "Invalid credentials");
    }

    return res.status(200).json({
      message: "User logged in successfully",
      token,
    });
  } catch (error) {
    next(error);
  }
};
