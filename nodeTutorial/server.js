import http from "http";

const PORT = 5000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  res.write("<h1>started nodejs</h1>");
  res.end();
});

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
