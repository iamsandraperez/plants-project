
function initialize() {
    console.log("YAY")
    let input = document.getElementById('searchTextField');
    let autocomplete = new google.maps.places.Autocomplete(input, { types: ['geocode'] });

    autocomplete.addListener('place_changed', function () {
        console.log("ENTRO")

        let place = autocomplete.getPlace();
        console.log(place)
        document.getElementById('city2').value = place.name;
        document.getElementById('cityLat').value = place.geometry.location.lat();
        document.getElementById('cityLng').value = place.geometry.location.lng();
    });
}
// google.maps.event.addDomListener(window, 'load', initialize);