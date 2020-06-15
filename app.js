const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/testangular");
mongoose.connection
  .once("open", function () {
    console.log("Connetion has been made");
  })
  .on("error", function (error) {
    console.log("Connection error");
  });

const peopleRoutes = require("./routes/people-routes");

app.use("/people", peopleRoutes);

module.exports = app;
