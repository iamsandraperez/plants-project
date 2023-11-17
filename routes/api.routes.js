const express = require('express');
const router = express.Router();

const Event = require('./../models/Events.model')

router.get("/event", (req, res, next) => {

    Event
        .find()
        .then(event => res.json(event))
        .catch(err => res.status(500).json({ message: 'Server issue D:', errorDetails: err }))
})

module.exports = router




