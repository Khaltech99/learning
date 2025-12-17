import express, { urlencoded } from "express";
import router from "./routes/todo.route.js";

const app = express();

// configurations middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

export default app;
