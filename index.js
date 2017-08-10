var lat;
var long;

function insertGoogleScript() {
	var google_api = document.createElement('script'),
			api_key    = 'AIzaSyCe7J9tAWhwUqefflIZh2jsbQtpGTr4sHM';

	// Inject the script for Google's API and reference the initGoogleAPI
	// function as a callback.
	google_api.src = 'https://maps.googleapis.com/maps/api/js?key='+ api_key +'&callback=initGoogleAPI&libraries=places,geometry';
	document.body.appendChild(google_api);
}

function initGoogleAPI() {
	var autocomplete = new google.maps.places.SearchBox(document.querySelector("#city-search"));

	autocomplete.addListener('places_changed', function() {
		var place = autocomplete.getPlaces()[0];
		lat = place.geometry.location.lat();
    long = place.geometry.location.lng();
	});
}

insertGoogleScript();

function displayCoords(lat, long) {
  $('.screen').append('<h1>' + lat + ' ' + long + '</h1>')
}

$('button').on('click', function(e) {
  var city_name = $('#city-search').val();
  $('.form').fadeOut(100, function() {
    displayCoords(lat, long);
  });
});
