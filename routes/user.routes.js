const express = require('express')
const router = express.Router()
const User = require("../models/User.model")


router.get("/user/list", (req, res, next) => {


    User
        .find()
        .then(user => res.render('user/userlist', { user }))
        .catch(err => next(err))
})



router.get('/user/:usid', (req, res, next) => {
    const { usid } = req.params

    User
        .findById(usid)
        .then(user => res.render('user/user', user))
        .catch(err => next(err))
})


router.get('/edit/:usid', (req, res, next) => {
    const { usid } = req.params
    User
        .findById(usid)
        .then(user => res.render('user/edit', user))
        .catch(err => next(err))
})


router.post('/edit/:usid', (req, res, next) => {
    const { usid } = req.params
    const { email, nickname, myPlants, } = req.body
    User
        .findByIdAndUpdate(usid, { email, nickname, myPlants })
        .then(user => res.redirect('/user/:usid', user))
})







module.exports = router
