import http from "http";

const PORT = 5000;
const server = http.createServer((req, res) => {
  res.write("hello i just started node");
  res.end();
});

server.listen(PORT, () => {
  console.log(`listening to port number:${PORT}`);
});
