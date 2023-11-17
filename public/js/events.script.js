
function initialize() {
    let input = document.getElementById('searchTextField');
    let autocomplete = new google.maps.places.Autocomplete(input, { types: ['geocode'] });

    autocomplete.addListener('place_changed', function () {

        let place = autocomplete.getPlace();
        document.getElementById('place').value = place.name;
        document.getElementById('cityLat').value = place.geometry.location.lat();
        document.getElementById('cityLng').value = place.geometry.location.lng();
    });
}






const MadridCoords = {
    lat: 40.416775
    , lng: -3.703790
}
let myMap

function init() {
    renderMap()
    getPlacesFromAPI()


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


function getPlacesFromAPI() {

    axios
        .get('/api/places')
        .then(response => printPlacesMarkers(response.data))
        .catch(err => console.log(err))
}


function printPlacesMarkers(places) {

    places.forEach(elm => {

        const position = { lat: elm.location.coordinates[1], lng: elm.location.coordinates[0] }

        new google.maps.Marker({
            map: myMap,
            position,
            name: elm.name
        })
    })
}


