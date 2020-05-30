// Toggles Completed Requests.
function togglePastAppointments() {
  document.getElementById("pastChevron").classList.toggle('rotated');
}
var map;

function geocodeMap(address) {
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({
      'address': address
    },
    function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        console.log(results[0].geometry.location.lat());
        console.log(results[0].geometry.location.lng());
        google.maps.event.trigger(map, 'resize');
        map.setCenter(results[0].geometry.location);
      }
    });

}

function findCVS() {
  geocodeMap("CVS pharmacy 2456 South Grove Avenue, Ontario, CA 91761");
}

// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = {lat: -25.344, lng: 131.036};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}

function viewProfile() {
  window.location.href("profile.html");
}
