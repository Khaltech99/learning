import { Router } from "express";
import tokenAuth from "./tokenAuth.js";
import profileController from "./controllers/profileController.js";

const router = Router();

router.get("/profile", tokenAuth, profileController);

export default router;
