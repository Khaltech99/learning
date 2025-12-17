import { Router } from "express";

const authRouter = Router();

authRouter.post("/register", (req, res) => {
  res.json({ message: "User registered" });
});
authRouter.post("/login", (req, res) => {
  res.json({ message: "User login" });
});

export default authRouter;
