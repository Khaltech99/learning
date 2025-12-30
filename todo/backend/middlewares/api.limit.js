import rateLimit from "express-rate-limit";

export const apiLimit = rateLimit({
  windowMs: 2 * 60 * 1000,
  limit: 3,
  message: {
    success: false,
    message: "too many request",
  },
  skipSuccessfulRequests: true,
});
