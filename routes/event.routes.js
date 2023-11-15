const express = require('express')
const router = express.Router()

const Event = require("../models/Events.model")
const { issLogedIn, checkRole, check } = require('../middlewares/route-guard')




router.get('/event/create', issLogedIn, checkRole("admin"), (req, res, next) => {
    res.render("events/eventlist")

})


module.exports = router