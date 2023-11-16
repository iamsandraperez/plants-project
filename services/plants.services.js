const axios = require('axios')

class PlantService {
    constructor() {
        this.axiosApp = axios.create({
            baseURL: 'https://perenual.com/api'
        })
    }
    getFindPlants(q) {
        return this.axiosApp.get('/species-list?key=sk-A7es654cd324b80892875', { params: { q } }) // parametros de axios para la url 
    }
    getAllPlants() {
        return this.axiosApp.get('/species-list?key=sk-A7es654cd324b80892875')
    }

    getPlantDetails(_id) {
        return this.axiosApp.get('/species/details/' + _id, { params: { key: 'sk-A7es654cd324b80892875' } })
    }
}

const plantService = new PlantService()
module.exports = plantService  
