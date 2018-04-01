
        $(function() {
            // This url is signed with my API Key, but it will only work with these parameters.
            // This way I can use the URL in this example without exposing my secret credentials.
            var signedURL = 'https://api.meetup.com/2/open_events?zip=30308&and_text=False&offset=0&format=json&search=False&page=200&radius=50.0&category=32&desc=False&status=upcoming&key=34305b6a752276562604f306a51d76';
            
            // Loop through the various template id's and compile them using handlebars. There
            // is only one template in this example, but it would be easy to add more.
            var templates = ['events'].reduce(function(ret, id) {
              // We're storing handlebars templates as wierd script tags, but we can access their
              // content (the raw template) just like any other HTML element by reading it's text
              // content.
              var rawTemplate = $('#' + id).text();
              // Handlebars takes the text of the template and converts it into a function we can
              // use later. The function takes an object called the "context", and the little {{foo}}
              // things in the template are references to keys on that object. Handlebars takes the
              // values associated with these keys and inserts them in place of the tokens when
              // the template is rendered.
              ret[id] = Handlebars.compile(rawTemplate);
              return ret;
            }, {});
            
            function fetchEvents(url) {
              // Here we do the actual ajax request. If it's successfull then
              // renderEvents gets called with the response as an argument.
              // There's no error handler here, but you'd probably want to
              // handle errors in some way that doesn't break the app.
              $.ajax({
                url: url, 
                success: renderEvents,
                // This is key. Read up on JSONP requests.
                dataType: 'jsonp'
              }); 
            }
            
            function renderEvents(response) {
              // Once we get the response, we can pass it to our template function
              // and get some HTML. Much simpler than writing out the JST (JavaScript
              // Template Function) manually in our JS, and much cleaner and easier
              // to understand then a bunch of string concatenation.
              var renderedHTML = templates['events'](response);
              // Then we set the HTML into our container.
              $('#events-container').html(renderedHTML);
            }
            
            // Kick things off!
            fetchEvents(signedURL);
          });
          