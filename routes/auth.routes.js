const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const User = require("../models/User.model")
const saltRounds = 10



//Signup

router.get('/user/create', (req, res, next) =>
    res.render('auth/signup'))
router.post('/user/create', (req, res, next) => {
    const { name, username, email, password } = req.body
    bcrypt
        .genSalt(saltRounds)
        .then(salt => bcrypt.hash(password, salt))
        .then(hashedPassword => User.create({ name, email, username, password: hashedPassword }))
        .then(createdUser => res.redirect('/'))
        .catch(error => next(error))
    User
        .findOne({ email })
        .then(user => {
            if (user) {
                res.render('auth/signup', { errorMessage: ' Users already registered in our database! try instead to login' },)
                return

            }
        })
})

// Login

router.get('/user/login', (req, res, next) => {

    res.render('auth/login')
})
router.post('/user/login', (req, res, next) => {

    const { email, password } = req.body
    User
        .findOne({ email })
        .then(user => {
            if (!user) {
                res.render('auth/login', { errorMessage: 'Email not registered in our database' })
                return
            } else if (bcrypt.compareSync(password, user.password) === false) {
                res.render
                    ('auth/login', { errorMessage: 'incorrect password' })
                return
            } else {
                //req.session.currentUser = user
                res.redirect('/user/list')
            }
        })
        .catch(error => next(error))
})


//Logout
router.post('/user/logout', (req, res, next) => {
    req.session.destroy(() => res.redirect('/user/login'))
})



module.exports = router
