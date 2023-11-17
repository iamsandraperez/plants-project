const express = require('express')
const router = express.Router()
const Event = require("../models/Events.model")

router.get('/create', (req, res, next) => {
    res.render("events/createvent")
})

router.post('/create', (req, res, next) => {

    const { title, date, place, cityLat, cityLng, description } = req.body  ///revisar owner and participants cuando esté terminado

    const location = {
        type: 'Point',
        coordinates: [cityLng, cityLat]
    }

    const { _id } = req.session.currentUser




    Event
        .create({ title, date, place, location, description, owner: _id })
        .then(() => res.redirect('/event/list'))
        .catch(err => next(err))


    router.get("/map", (req, res, next) => {
        res.render('restaurants/map');
    })
})

router.get('/list', (req, res, next) => {


    Event
        .find()
        .populate("owner")
        .then(events => res.render("events/eventlist", { events }))
        .catch(err => next(err))
})


router.get('/:eventid', (req, res, next) => {

    const { eventid } = req.params

    Event
        .findById(eventid)
        .populate("participants")
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
    const { title, date, location, description, place } = req.body

    Event
        .findByIdAndUpdate(eventid, { title, date, location, description, place })
        .then(() => res.redirect(`/event/${eventid}`))
        .catch(err => next(err))
})




router.post('/delete/:eventid', (req, res, next) => {
    const { eventid } = req.params
    Event
        .findByIdAndDelete(eventid)
        .then(() => res.redirect("/"))
        .catch(err => next(err))
})


module.exports = router