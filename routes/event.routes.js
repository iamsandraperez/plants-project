const express = require('express')
const router = express.Router()
const Event = require("../models/Events.model")

router.get('/create', (req, res, next) => {
    res.render("events/createvent")
})

router.post('/create', (req, res, next) => {

    const { title, date, cityLat, cityLng, description } = req.body  ///revisar owner and participants cuando esté terminado
    //const { owner_id } = req.session.currentUser.name
    const location = {
        type: 'Point',
        coordinates: [cityLng, cityLat]
    }

    Event
        .create({ title, date, location, description })
        .then(() => res.redirect('/list'))
        .catch(err => next(err))
})

router.get('/list', (req, res, next) => {

    Event
        .find()
        .then(events => res.render("events/eventlist", { events }))
        .catch(err => next(err))
})


router.get('/:eventid', (req, res, next) => {

    const { eventid } = req.params

    Event
        .findById(eventid)
        .then(event => res.render("events/eventdetails", event))
        .catch(err => next(err))
})


router.get('/edit/:eventid', (req, res, next) => {

    const { eventid } = req.params

    Event
        .findById(eventid)
        .then(event => res.render('events/editevent', event))
        .catch(err => next(err))
})


router.post('/edit/:eventid', (req, res, next) => {

    const { eventid } = req.params
    const { title, date, location, description } = req.body

    Event
        .findByIdAndUpdate(eventid, { title, date, location, description })
        .then(() => res.redirect(`/${eventid}`))
        .catch(err => next(err))
})


module.exports = router