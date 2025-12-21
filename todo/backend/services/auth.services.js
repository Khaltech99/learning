// imports
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const secret = process.env.SECRET;

if (!secret) {
  throw new Error("JWT SECRET is not defined");
}

// Register user service
export const registerUserServices = async ({ username, password, email }) => {
  // sanitizing the email to remove uppercase and spaces

  //   checking if the user already exists
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new Error("THE USER WITH THIS EMAIL EXISTS");
  }

  //   hashing the password for security reason
  const hashedPassword = await bcrypt.hash(password, 12);

  //   returning the newUser object to the db
  const newUser = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  return {
    id: newUser.id,
    username: newUser.username,
    email: newUser.email,
  };
};

// login user service
export const loginUserService = async ({ email, password }) => {
  try {
    // check if the user exists
    const foundUser = await User.findOne({ email });

    if (!foundUser) {
      throw new Error("INVALID EMAIL OR PASSWORD");
    }

    // check if the password matches the provided password
    const isMatch = await bcrypt.compare(password, foundUser.password);
    if (!isMatch) {
      throw new Error("INVALID EMAIL OR PASSWORD");
    }
    // send the token after the checks
    return jwt.sign(
      { sub: foundUser._id.toString(), email: foundUser.email },
      secret,
      { expiresIn: "3h" }
    );
  } catch (error) {
    throw new Error(error.message);
  }
};
