const express = require('express')
const router = express.Router()
const plantService = require('../services/plants.services')
const User = require("../models/User.model")
const { isLoggedIn, checkRole, checkRoleOwner } = require('../middlewares/route-guard')





router.get("/list", isLoggedIn, (req, res, next) => {

    User

        .find()
        .then(users => res.render('user/userlist', { users }))
        .catch(err => next(err))

})

router.get('/details/:_id',
    isLoggedIn,
    checkRole('visitor', 'planter', 'admin'),
    (req, res, next) => {

        const { _id } = req.params
        const isAdmin = req.session.currentUser.role === 'admin'
        const isOwner = req.session.currentUser._id === _id

        User
            .findById(_id)
            .then(user => {
                if (!user) {
                    return res.render('user/userdetails', { user, details: [], isAdmin, isOwner })
                }
                console.log("Array de IDs de myPlants:", user.myPlants);
                const plantsPromises = user.myPlants.map(elm => plantService.getPlantDetails(elm))
                return Promise.all(plantsPromises)
                    .then(plantDetails => {
                        const details = plantDetails.map(elm => elm.data)
                        res.render('user/userdetails', { user, details, isAdmin, isOwner })
                    })
            })
            .catch(err => next(err))
    })

router.get('/edit/:_id', isLoggedIn, checkRoleOwner('admin'), (req, res, next) => {

    const { _id } = req.params

    User
        .findById(_id)
        .then(user => res.render('user/edit', user))
        .catch(err => next(err))
})



router.post('/edit/:_id', isLoggedIn, checkRoleOwner('admin'), (req, res, next) => {

    const { _id } = req.params
    const { name, nickname, email } = req.body

    User
        .findByIdAndUpdate(_id, { name, nickname, email })
        .then(() => res.redirect('/'))
        .catch(err => next(err))
})


router.post('/delete/:_id', isLoggedIn, (req, res, next) => {

    const { _id } = req.params

    User
        .findByIdAndDelete(_id)
        .then(() => res.redirect("/"))
        .catch(err => next(err))
})

router.post('/categoryvisitor/:_id', checkRole('admin'), (req, res) => {

    const { _id } = req.params

    User
        .findByIdAndUpdate(_id, { role: 'visitor' })
        .then(() => res.redirect('/'))
        .catch(err => next(err))
})

router.post('/categoryplanter/:_id', checkRole('admin'), (req, res) => {

    const { _id } = req.params

    User
        .findOneAndUpdate(_id, { role: 'admin' })
        .then(() => res.redirect('/'))
        .catch(err => next(err))
})

module.exports = router




