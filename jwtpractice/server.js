import express from "express";

const app = express();

// port and port listeners

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`listening to port:${port}`);
});
