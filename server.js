const http = require("http");
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  const data = {
    value: "hello world",
    author: "Johanna"
  };
  const response = JSON.stringify(data);
  res.end(response);
});
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

process.on("SIGINT", () => {
  console.log(`process received a SIGINT signal`);
  server.close();
});
