const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");

const Person = require("../models/person-model");

router.get("/", (request, response, next) => {
  response.status(200).send("hello world");
});

router.post("/", (request, response, next) => {
  Person.create(request.body,function(){
    
  }  )
  response.status(200).json({
    message: "it works!",
  });
});

module.exports = router;
