var map, infoWindow, pos;
function initMap() {
    map = new google.maps.Map(document.getElementById('maps'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 6
    });
    infoWindow = new google.maps.InfoWindow;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

        onClick( pos );

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

function onClick(pos) {
    $(".buttons").on("click", function () {
        console.log("Button clicked");
        let sportName = $(this).attr("data-name");
        console.log("sportName: ", sportName);
        console.log("This: ", $(this));
        $.ajax({
            url: constructURL(sportName, pos),
            method: "GET"
        }).then(function (res) {
            console.log("Response: ", res)
            lat = res.city.lat;
            lng = res.city.lon;
            var url = res.events.link;
            var eName = res.events.name;
            console.log("Lat & lon: ", lat, lng);
        });

        
    });
}


function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}


function constructURL(sport, lat, lon) {
    return qURL = "https://cors-anywhere.herokuapp.com/https://api.meetup.com/topics.json?callback=gotIt&page=1?&key=34305b6a752276562604f306a51d76&sign=true&photo-host=public&page=20&text=" + sport + "&lat=" + pos.lat + "&lon=" + pos.lng
};


//         let sportName = $(this).data("name");
//         console.log(name)
        // $.ajax({
        //     url: constructURL(sportName, lat, lng),
        //     method: "GET"
        // }).then(function (res) {
        //     lat = res.city.lat;
        //     lng = res.city.lon;
        //     var url = res.events.link;
        //     var eName = res.events.name;
        // });

// });
// }
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
