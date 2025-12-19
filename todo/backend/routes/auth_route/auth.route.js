import { Router } from "express";

import { loginUser, registerUser } from "../../controllers/auth.controllers.js";
import { validateMiddleware } from "../../middlewares/validate.middleware.js";
import {
  LoginInputSchema,
  RegisterInputSchema,
} from "../../schema/validate.schema.js";

const authRouter = Router();

/* REGISTER */
authRouter.post(
  "/register",
  validateMiddleware(RegisterInputSchema),
  registerUser
);

/* LOGIN */
authRouter.post("/login", validateMiddleware(LoginInputSchema), loginUser);

export default authRouter;
