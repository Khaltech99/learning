import express from "express";
import posts from "./posts.js";

console.log("ENV PORT:", process.env.PORT);

const app = express();

const port = process.env.PORT;

app.use(express.urlencoded({ extended: false }));

app.use("/api/posts", posts);

app.listen(port, () => {
  console.log(`running at port:${port}`);
});
