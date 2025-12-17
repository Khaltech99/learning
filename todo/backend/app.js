import express, { urlencoded } from "express";
import router from "./routes/todo_route/todo.route.js";
import authRouter from "./routes/auth_route/auth.route.js";

const app = express();

// configurations middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);
app.use("/api/auth", authRouter);

export default app;
