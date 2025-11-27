import { createServer } from "http";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { readFile } from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = 7000;

const server = createServer(async (req, res) => {
  // edge case
  if (req.method !== "GET") {
    res.writeHead(405, { "content-type": "text/plain" });
    res.end("invalid method");
    return;
  } else {
    let pathname;
    if (req.url === "/") {
      res.writeHead(200, { "content-type": "text/html" });
      pathname = join(__dirname, "public", "index.html");
      const html = await readFile(pathname);
      res.end(html);
      return;
    } else if (req.url === "/test") {
      res.writeHead(200, { "content-type": "text/html" });
      pathname = join(__dirname, "public", "test.html");
      const html = await readFile(pathname);
      res.end(html);
      return;
    } else {
      res.writeHead(404, { "content-type": "text/plain" });
      res.end(JSON.stringify({ message: "invalid route" }));
      return;
    }
  }
});

server.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
