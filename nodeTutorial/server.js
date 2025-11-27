import http from "http";

const PORT = 5000;

const server = http.createServer((req, res) => {
  try {
    // if get request
    if (req.method === "GET") {
      if (req.url === "/") {
        res.writeHead(200, { "content-type": "text/html" });
        res.end("<h1>this is homepage</h1>");
      } else if (req.url === "/about") {
        res.writeHead(200, { "content-type": "text/html" });
        res.end("<h1>This is the about page</h1>");
      } else {
        res.writeHead(404, { "content-type": "text/html" });
        res.end("<h1>invalid page</h1>");
      }
    } else {
      throw new Error("method not allowed");
    }
    // if not get request
  } catch (error) {
    res.writeHead(500, { "content-type": "text/plain" });

    res.end("server error");
  }
});

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
