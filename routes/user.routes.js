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
        .then(user => res.redirect(`/user/${usid}`))
        .catch(err => next(err))
})

router.post(('/edit/:usid', (req, res, next) => {
    const { usid } = req.params
    const { email, nickname, myPlants, } = req.body
    User
        .findByIdAndUpdate(usid, { email, nickname, myPlants })
        .then(user => res.redirect(`/user/${usid}`))
        .catch(err => next(err))
}))



router.post('/user/:id/delete', (req, res, next) => {

    const { id } = req.params

    User
        .findByIdAndDelete(id)
        .then(() => res.redirect("/"))
        .catch(err => console.log("not user", err))
});





module.exports = router




// Promise
//     .all(promises)
//     .then(response => {
//         const user = response[0]
//         const plant = response[1]

//         res.render('user/edit', { user, plant })
//     })
//     .catch(err => next(err))

