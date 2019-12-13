const http = require("http");
const port = 3000;

let data = {
  value: "hello world",
  author: "Johanna"
};

const server = http.createServer((req, res) => {
  console.log(req.method);
  console.log(req.url);
  console.log(req.headers);

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  const response = JSON.stringify(data);
  res.end(response);
});
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

process.on("SIGINT", () => {
  console.log(`process received a SIGINT signal`);
  server.close(err => {
    console.log(err);
    process.exit();
  });
});
