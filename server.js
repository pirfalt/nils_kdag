const http = require("http");
const port = 3000;

let data = {
  
  "/nils" : {
    mail : "Nils epostadress",
    firstname : "Nils",
    lastname : "Persson"
  },
  "/emil" : {
    mail : "Emils epostadress",
    firstname : "Emil",
    lastname : "Pirfält"
  }
};

const server = http.createServer((req, res) => {
  console.log(req.method);
  console.log(req.url);
  //console.log(req.headers);
  let response = data[req.url]
  if(response==null) {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end(JSON.stringify("Sorry kunde inte hitta: "+req.url));
    return;
  }
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(JSON.stringify(response));
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
