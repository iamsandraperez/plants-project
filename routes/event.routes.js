const express = require('express')
const router = express.Router()

const Event = require("../models/Events.model")




router.get('/create', (req, res, next) => {
    res.render("/events/createvent")
})

router.post('/create', (req, res, next) => {

    const { owner_name } = req.session.currentUser.name
    const { title, date, cityLat, cityLng, description, } = req.body  ///revisar owner and participants cuando esté terminado

    const location = {
        type: 'Point',
        coordinates: [cityLng, cityLat]
    }


    Event
        .create({ title, date, location, description, owner_name })
        .then(() => res.redirect('/list'))
        .catch(err => next(err))


})

router.get('/list', (req, res, next) => {
    Event
        .find()
        .then(fiesta => res.render("events/eventlist", { fiesta }))
        .catch(err => next(err))

})

router.get("/list", (req, res, next) => {
    res.render('')
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
























// })
module.exports = router