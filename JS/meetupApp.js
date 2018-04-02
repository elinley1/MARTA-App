var map, infoWindow, pos;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 6
    });
    infoWindow = new google.maps.InfoWindow;


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
            console.log('pos:  ', pos);
        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {

        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}


// var lat = pos.lat;
// var lng = pos.lng;
// var locations = [];
function constructURL(sport, lat, lon) {
    return qURL = "https://api.meetup.com/find/upcoming_events?&key=34305b6a752276562604f306a51d76&sign=true&photo-host=public&page=20&text=" + sport + "&lat=" + lat + "lon=" + lng
};

$("#buttons").on("click", function () {
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        var pos2 = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        infoWindow.open(map);
        map.setCenter(pos);
        console.log('pos2:  ', pos2);
    })
    let sportName = $(this).data("name");
    console.log(name)
    $.ajax({
        url: constructURL (sportName, pos.lat, pos.lng),
        method: "GET"
    }).then(function (res) {
        var lat = res.city.lat;
        var lng = res.city.lon;
        var url = res.events.link;
        var eName = res.events.name;
    });

    //     var sport = $(this).val(".sport-button"),
    //     
    

//         

//             var markers = locations.map(function (location, i) {
//                 return new google.maps.Marker({
//                     position: location,
//                     label: sport, eName, url
//                 });
//             });
//             var markerCluster = new MarkerClusterer(map, markers,
//                 { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

//            //This is where Kenny will loop through the lat and lon for each event and put the property value pairs in an array.
//            // var location = []        
//         })})