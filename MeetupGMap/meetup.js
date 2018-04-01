
        $(function() {
            
            var signedURL = 'https://api.meetup.com/2/open_events?zip=30308&and_text=False&offset=0&format=json&search=False&page=200&radius=50.0&category=32&desc=False&status=upcoming&key=34305b6a752276562604f306a51d76';
            
            
            var templates = ['events'].reduce(function(ret, id) {
             
              var rawTemplate = $('#' + id).text();
              
              ret[id] = Handlebars.compile(rawTemplate);
              return ret;
            }, {});
            
            function fetchEvents(url) {
              
              $.ajax({
                url: url, 
                success: renderEvents,
               
                dataType: 'jsonp'
              }); 
            }
            
            function renderEvents(response) {
              
              var renderedHTML = templates['events'](response);
            
              $('#events-container').html(renderedHTML);
            }
            
            
            fetchEvents(signedURL);
          });
          