import express from "express";
import cors from "cors";
import router from "./auth.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user/auth", router);

// 404 handler for invalid route
app.use((req, res, next) => {
  res.status(404).json({ message: "invalid route" });
  next();
});

// port and port listeners
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
