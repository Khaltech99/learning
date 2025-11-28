import { readFile } from "fs";

readFile("text.txt", "utf-8", (error, data) => {
  if (error) throw Error;
  console.log(data);
});
