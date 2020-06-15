const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const peopleRoutes = require ("./routes/people-routes")

app.use("/people", peopleRoutes);



module.exports = app;
