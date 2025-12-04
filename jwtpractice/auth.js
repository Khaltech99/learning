import { Router } from "express";

const router = Router();

// post request
router.post("/register", (req, res, next) => {
  res.json({ msg: "you are in the register route" });
});

router.post("/login", (req, res, next) => {
  res.json({ msg: "you are in the login route" });
});

export default router;
