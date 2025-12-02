import express from "express";
import posts from "./posts.js";
import errorHandler from "./middleware/errorHandler.js";
import error from "./error.js";

console.log("ENV PORT:", process.env.PORT);

const app = express();

const port = process.env.PORT;

app.use(express.urlencoded({ extended: false }));

app.use("/api/posts", posts);

app.use((req, res, next) => {
  next(error(404, "unknown route"));
});
app.use(errorHandler);

app.listen(port, () => {
  console.log(`running at port:${port}`);
});
