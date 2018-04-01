var json = [{ 
    "lat": 34.007126, 
    "lng": -84.542503, 
    "content":"Marietta Soccer" 
}, 
{ 
    "lat": 33.773422, 
    "lng": -84.293427, 
    "content":"Decatur Volleyball" 
}, 
{ 
    "lat": 33.939998626708984, 
    "lng": -84.31999969482422,
    "content":"Atlanta Tennis"
}];

function initialize() {
        var latitude = 33.7490,
            longitude = -84.3880,
            radius = 8000, //how is this set up
            center = new google.maps.LatLng(latitude,longitude),
            bounds = new google.maps.Circle({center: center, radius: radius}).getBounds(),
            mapOptions = {
                center: center,
                zoom: 9,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: false
            };

        var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

        setMarkers(center, radius, map);
    }

    function setMarkers(center, radius, map) {

        var circle = new google.maps.Circle({
                strokeColor: '#000000',
                strokeOpacity: 0.25,
                strokeWeight: 1.0,
                fillColor: '#ffffff',
                fillOpacity: 0.1,
                clickable: false,
                map: map,
                center: center,
                radius: radius
            });
        var bounds = circle.getBounds();

        //loop between each of the json elements
        for (var i = 0, length = json.length; i < length; i++) {
            var data = json[i],
            latLng = new google.maps.LatLng(data.lat, data.lng); 



            //if(bounds.contains(latLng)) {
                // Creating a marker and putting it on the map
                var marker = new google.maps.Marker({
                    position: latLng,
                    map: map,
                    title: data.content
                });
                infoBox(map, marker, data);
            //}
        }

        circle.bindTo('center', marker, 'position');
    }

    function infoBox(map, marker, data) {
        var infoWindow = new google.maps.InfoWindow();
        // Attaching a click event to the current marker
        google.maps.event.addListener(marker, "click", function(e) {
            infoWindow.setContent(data.content);
            infoWindow.open(map, marker);
        });

        // Creating a closure to retain the correct data 
        // Note how I pass the current data in the loop into the closure (marker, data)
        (function(marker, data) {
          // Attaching a click event to the current marker
          google.maps.event.addListener(marker, "click", function(e) {
            infoWindow.setContent(data.content);
            infoWindow.open(map, marker);
          });
        })(marker, data);
    }

   google.maps.event.addDomListener(window, 'load', initialize);