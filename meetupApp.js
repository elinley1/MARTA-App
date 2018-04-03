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

            onClick(pos);

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
function gotIt(response) {
    console.log('response: ', response);
}
function onClick(pos) {

    $(".buttons").on("click", function () {
        console.log("Button clicked");
        let sportName = $(this).attr("data-name");
        console.log("sportName: ", sportName);
        // console.log("This: ", $(this));
        $.ajax({
            url: constructURL(sportName, pos),
            method: "GET",
        }).then(function (res) {
            console.log("Response: ", res);
            // console.log("NewArray: ", newArray);
            let latArray = res.events.map(item => {
                let newObj = {};
                newObj.lat = item.group.lat;
                newObj.lon = item.group.lon;
                return item.group.lat;
            });
            return latArray;
            let lonArray = res.events.map(item => {
                return item.group.lon;
            });
        dropPin();    

        });
    });

    location = {
        lat: [],
        lon: []
    }

    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
    }

    function constructURL(sport, lat, lon) {
        return qURL = "https://cors-anywhere.herokuapp.com/https://api.meetup.com/find/upcoming_events?page=1?&key=34305b6a752276562604f306a51d76&sign=true&photo-host=public&page=10&text=" + sport + "&lat=" + pos.lat + "&lon=" + pos.lng
    };
    eName = " ";
    eURL = " ";

    // function loopResponse (res){
    //     res.map(function (r) {         
    //         locations.lat = events.group.lat;
    //         locations.lon = events.group.lon;
    //         console.log("Locations: ", locations.lat, locations.lon)
    //     });



    function dropPin(lat, lon) {
        let lat = latArray.map(i => {
            return i.lat;
            console.log("Single Lat:", lat);
        });
        let lon = lonArray.map(i => {
            return i.lon;
        });
        var markers = new google.maps.Marker({
            position: lat, lon,
            map: map,
            label: eName, eURL
        });
    };
}
