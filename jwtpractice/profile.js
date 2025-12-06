import { Router } from "express";
import tokenAuth from "./tokenAuth.js";

const router = Router();

router.get("/profile", tokenAuth, (req, res, next) => {
  res.status(200).json({ message: "token success", user: req.user });
  next();
});

export default router;
