import { Router } from "express";

import { loginUser, registerUser } from "../../controllers/auth.controllers.js";

const secret = process.env.SECRET;

if (!secret) {
  throw new Error("JWT SECRET is not defined");
}

const authRouter = Router();

/* REGISTER */
authRouter.post("/register", registerUser);

/* LOGIN */
authRouter.post("/login", loginUser);

export default authRouter;
