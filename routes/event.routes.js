const express = require('express')
const router = express.Router()

const Event = require("../models/Events.model")




router.get('/event/create', (req, res, next) => {
    res.render("events/createvent")
})

router.post('/event/create', (req, res, next) => {


    const { title, date, cityLat, cityLng, description } = req.body  ///revisar owner and participants cuando esté terminado

    const location = {
        type: 'Point',
        coordinates: [cityLng, cityLat]
    }
    const { _id } = req.session.currentUser

    Event
        .create({ title, date, location, description, owner: _id })
        .then(() => res.redirect('/event/list'))
        .catch(err => next(err))
})

router.get('/event/list', (req, res, next) => {
    Event
        .find()
        .then(fiesta => res.render("events/eventlist", { fiesta }))
        .catch(err => next(err))

})



router.get('/event/:eventid', (req, res, next) => {

    const { eventid } = req.params
    Event
        .findById(eventid)
        .then(fiesta => res.render("events/eventdetails", fiesta))
        .catch(err => next(err))

})



router.get('/event/edit/:eventid', (req, res, next) => {
    const { eventid } = req.params

    Event
        .findById(eventid)
        .then(fiesta => res.render('events/editevent', fiesta))
        .catch(err => next(err))
})


router.post('/event/edit/:eventid', (req, res, next) => {
    const { eventid } = req.params

    const { title, date, location, description } = req.body
    Event
        .findByIdAndUpdate(eventid, { title, date, location, description, owner })
        .then(() => res.redirect(`event/${eventid}`))

        .catch(err => next(err))
})









module.exports = router
























// })
module.exports = router