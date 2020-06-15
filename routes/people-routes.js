const express = require("express");
const router = express.Router();
const people = require("../people")

router.get("/", (request, response, next) => {
  response.status(200).send(people);
});



module.exports = router;