const express = require('express')
const router = express.Router()

const Event = require("../models/Events.model")



router.get('/event/create', (req, res, next) => {
    res.render("events/createvent")
})

router.post('/event/create', (req, res, next) => {
    const { title, date, latitude, longitude, description } = req.body  ///revisar owner and participants cuando esté terminado

    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Event
        .create({ title, date, location, description })
        .then(() => res.redirect('/'))
        .catch(err => next(err))

})


module.exports = router