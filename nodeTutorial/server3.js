// import { readFile } from "fs";

// readFile("text.txt", "utf8", (error, data) => {
//   if (error) throw Error;
//   console.log(data);
// });

import { readFile } from "fs/promises";

const run = async () => {
  try {
    const data = await readFile("text.txt", "utf8");
    console.log(data);
  } catch (error) {
    throw new Error();
  }
};
run();
