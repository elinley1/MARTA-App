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
            dropPin(pos);

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
function gotIt(response){
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
            loopResponse(res.results)
        })


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
    return qURL = "https://cors-anywhere.herokuapp.com/https://api.meetup.com/topics.json?page=1?&key=34305b6a752276562604f306a51d76&sign=true&photo-host=public&page=20&text=" + sport + "&lat=" + pos.lat + "&lon=" + pos.lng
};
eName = " ";
eURL = " ";

function loopResponse (res){
    res.forEach(function (r) {
        let lat = events.group.lat;
        let lon = events.group.lon;
        let json = '{events.group.name}';
        let eName = JSON.parse(json);
        console.log("eName: ", eName);
        let eURL = events.name.link;
        console.log("Lat & Lon Loop: ", lat, lon);
        dropPin();
    });
  
};       


function dropPin(lat, lon) {
    var markers =  new google.maps.Marker({
            position: lat, lon,
            map: map,
            label: eName, eURL
        });
    };
  
           //This is where Kenny will loop through the lat and lon for each event and put the property value pairs in an array.
           // var location = []        
