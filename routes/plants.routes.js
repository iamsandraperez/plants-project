
const express = require('express')
const router = express.Router()

const plantService = require('../services/plants.services')

router.get('/plant/list', (req, res) => {

    let { q } = req.query

    if (q) {
        plantService
            .getFindPlants(q)
            .then(response =>
                res.render('plants/list', { plants: response.data.data }))
            .catch(err => next(err))
    } else {
        plantService
            .getAllPlants()
            .then(response =>
                res.render('plants/list', { plants: response.data.data })) //data de la respuesta y data de la estructura de datos de la api

            .catch(err => next(err))
    }
})

module.exports = router