const SpainCoords = { lat: 40.392521370648154, lng: - 3.6989879718518366 }
let myMap

alert('yaya')

function init() {
    renderMap()
    getEventFromAPI()
}

function renderMap() {

    myMap = new google.maps.Map(
        document.querySelector('#myMap'),
        {
            zoom: 13,
            center: ironhackCoords,
        }
    )
}

function getMapFromAPI() {

    axios
        .get('/api/events')
        .then(response => printEventsMarkers(response.data))
        .catch(err => console.log(err))
}

function printEventsMarkers(events) {

    events.forEach(elm => {

        const position = { lat: elm.location.coordinates[1], lng: elm.location.coordinates[0] }

        new google.maps.Marker({
            map: myMap,
            position,
            title: elm.name
        })
    })
}