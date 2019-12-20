const util = require("util");
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
    color: "yellow"
  }
};

app.get("/", function(req, res) {
  res.send("Hello World");
});

app.get("/:id", function(req, res) {
  const entity = data[req.params.id];
  if (entity == null) {
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

app.listen(port);

process.on("SIGINT", () => {
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
