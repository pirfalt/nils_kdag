const util = require("util");
const os = require("os");
const express = require("express");
const app = express();
const port = 3000;

let data = {
  nils: {
    mail: "Nils epostadress",
    firstname: "Nils",
    lastname: "Persson"
  },
  emil: {
    mail: "Emils epostadress",
    firstname: "Emil",
    lastname: "Pirfält"
  },
  michelle: {
    mail: "Michelles mail",
    firstname: "Michelle",
    lastname: "Khan"
  },
  banana: {
    color: "yellow",
    tasty: true
  }
};

const homeSite = `
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Home</title>
</head>
<body>
  <h1>Hello World!</h1>
  <code>${JSON.stringify(data)}</code>
</body>
</html>
`;
app.get("/", function(req, res) {
  res.send(homeSite);
});

app.get("/:id", function(req, res, next) {
  const entity = data[req.params.id];
  if (entity == null) {
    next();
    return;
  }
  res.json(entity);
});

app.get("/:id/:field", function(req, res, next) {
  const entity = data[req.params.id];
  if (entity == null) {
    next();
    return;
  }
  const field = entity[req.params.field];
  if (field == null) {
    next();
    return;
  }
  res.json(field);
});

const server = app.listen(port, () => {
  const nets = os.networkInterfaces();
  const publicAddress = nets["en0"].find(n => n.family == "IPv4").address;
  console.log(`Listening:`);
  console.log(`  Local:   http://localhost:${port}/`);
  console.log(`  Public:  http://${publicAddress}:${port}/`);
});

process.on("SIGINT", () => {
  console.log(`process received a SIGINT signal`);

  const close = util
    .promisify(server.close.bind(server))()
    .then(() => console.log("close"));

  const timeout = util
    .promisify(setTimeout)(1000)
    .then(() => console.log("timeout"));

  Promise.race([close, timeout])
    .then(() => {
      console.log("exit");
      process.exit(0);
    })
    .catch(err => {
      console.log("crash", err);
      process.exit(-1);
    });
});
