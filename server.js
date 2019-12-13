const express = require('express')
const app = express()
const port = 3000;

let data = {

  "nils": {
    mail: "Nils epostadress",
    firstname: "Nils",
    lastname: "Persson"
  },
  "emil": {
    mail: "Emils epostadress",
    firstname: "Emil",
    lastname: "Pirfält"
  },
  "michelle": {
    mail: "Michelles mail",
    firstname: "Michelle",
    lastname: "Khan"
  }
};

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/:username/firstname', function (req, res) {
  const user = data[req.params.username];
  if (user == null) {
    return;
  }
  const response = user.firstname;
  if (response == null) {
    return;
  }
  res.json(response);
})

app.get('/:username', function (req, res) {
  const user = data[req.params.username];
  if (user == null) {
    return;
  }
  res.json(user);
})

app.listen(port, () => {
  console.log("listening to: http://localhost:"+port);
})

process.on("SIGINT", () => {
  console.log(`process received a SIGINT signal`);
  server.close(err => {
    console.log(err);
    process.exit();
  });
});
