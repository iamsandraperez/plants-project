const express = require('express');
const router = express.Router();
const User = require("../models/User.model")

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

// router.get("/user/:id", (res, req, next) => {
//   const { id } = req.params

//   User
//     .findById(id)
//     .then(user => res.render('/user/:id', { user }))

//})





module.exports = router;
