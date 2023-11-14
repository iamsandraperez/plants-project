const axios = require('axios')

class PlantService {
    constructor() {
        this.axiosApp = axios.create({
            baseURL: 'https://perenual.com/api/species-list?key=sk-A7es654cd324b80892875'
        })
    }
    getFindPlants(q) {
        return this.axiosApp.get('', { params: { q } }) // parametros de axios para la url 
    }
    getAllPlants() {
        return this.axiosApp.get('')
    }

}

const plantService = new PlantService()
module.exports = plantService