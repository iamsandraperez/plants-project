const express = require('express')
const router = express.Router()

const Event = require("../models/Events.model")



router.get('/event/create', (req, res, next) => {
    res.render("events/eventlist")

})


module.exports = router