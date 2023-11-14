//requiere('dotenv').config() // es necesraio? solo en las views??

const express = require('express')
const router = express.Router()

const plantService = require('../services/plants.services')

router.get('/plant/list', (req, res, next) => {
    let q = req.query.q
    if (q) {
        plantService
            .getFindPlants(q)
            .then(response =>
                res.render('plants/list', { plants: response.data.data })) // había que añadir un data más 
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