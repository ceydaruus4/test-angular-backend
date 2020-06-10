const express = require("express");
const app = express();

let allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};
app.use(express.static("public"));

let people = require("./public/test");
app.post("/people", (req, res) => {

    let person = req.body



    res.send();
  });

app.get("/person/:name", (req, res) => {
  res.send("name is: " + req.params.name);
});

app.get("/people", (req, res) => {
  res.send(people);
});

const port = 8080;
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
