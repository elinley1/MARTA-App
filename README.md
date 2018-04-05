# MARTA-App
# Meetup Map App (MMA)

The Meetup Map App allows the user to easily search Meetup.com for sporting activities and events. The Meetup Map App allows the user to easily search Meetup.com for sporting activities and events using their geolocation. The app places the events on Google Maps using markers/pins. When the user clicks a marker, additional information about the event becomes visible. This include the meetup event link.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Use Github repository to download files. 

### Installing

Download repository and test in browser.


### coding synopsis

Location + sport search parameter used to construct URL for AJAX request to Meetup
Pins are dropped onto Google Map based on returned results
User chooses specific sport to narrow results
Meetup API returns coordinates which are passed to Google Maps API as pin/markers JAVASCRIPT
•OnClick function containing Ajax Meetup request & Array to parse longitude and latitude
•Loop function loops through Meetup data parsing out needed details
•Marker (dropPin) function takes data & creates pins/markers on map

InitMap Function (Google)
•Links map to HTML, user geolocation request and initial map coordinates
•Takes dropPin and OnClick functions positions & resets map
```

## Deployment

Deployed to Github io, working demo is live. 

## Built With

* https://www.meetup.com/meetup_api/- Used for event directory
* https://developers.google.com/maps/web/- Used to generate geolocation

## Contributing

Please read 
For details on our code of conduct, and the process for submitting pull requests to us, please contact us via Github.
