var lat = pos.lat;
var lng = pos.lng;
var locations = []


$(".sport-button").on("click", function () {
    var sport = $(this).val(".sport-utton"),
    var qURL = "https://api.meetup.com/find/upcoming_events?&key=34305b6a752276562604f306a51d76&sign=true&photo-host=public&page=20&text=" + sport + "&lat=" + lat + "lon=" + lng,

        $.ajax({
            url: qURL,
            method: "GET"
        }).then(function (res) {
            var lat = res.city.lat;
            var lng = res.city.lon;
            var url = res.events.link;
            var eName = res.events.name;

            var markers = locations.map(function (location, i) {
                return new google.maps.Marker({
                    position: location,
                    label: sport, eName, url
                });
            });
            var markerCluster = new MarkerClusterer(map, markers,
                { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
        
           //This is where Kenny will loop through the lat and lon for each event and put the property value pairs in an array.
           // var location = []        
        

})