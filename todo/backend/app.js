import router from "./routes/todo_route/todo.route.js";
import authRouter from "./routes/auth_route/auth.route.js";
import { errorHandler } from "./middlewares/ErrorHandler.js";
import express from "express";
import { customError } from "./utils/error.js";

const app = express();

// configurations middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);
app.use("/auth", authRouter);

// 404 handler - should catch all unmatched routes
app.use((req, res, next) => {
  const error = customError("The requested resource was not found", 404);
  res.json({ message: error.message });
  next(error);
});

app.use(errorHandler);

export default app;
