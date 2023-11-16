const express = require('express')
const router = express.Router()
const User = require("../models/User.model")
const { issLogedIn, checkRole, check } = require('../middlewares/route-guard')




router.get("/user/list", (req, res, next) => {



    User
        .find()
        .then(user => res.render('user/userlist', { user }))
        .catch(err => next(err))
})



router.get('/user/:usid', (req, res, next) => {
    const { usid } = req.params
    const user = req.session.currentUser

    User
        .findById(usid)
        .then(user => res.render('user/user', user))
        .catch(err => next(err))

})


router.get('/edit/:usid', issLogedIn, (req, res, next) => {
    const { usid } = req.params
    User
        .findById(usid)
        .then(user => res.render('user/edit', user
        ))
        .catch(err => next(err))
})


router.post('/edit/:usid', issLogedIn, (req, res, next) => {
    const { usid } = req.params
    const { email, nickname, password, } = req.body
    User
        .findByIdAndUpdate(usid, { email, nickname, password })
        .then(() => res.redirect(`/user/${usid}`))
        .catch(err => next(err))
})




router.post('/delete/:usid', issLogedIn, (req, res, next) => {


    const { usid } = req.params

    User
        .findByIdAndDelete(usid)
        .then(() => res.redirect("/"))
        .catch(err => console.log("not user", err))
});





module.exports = router




