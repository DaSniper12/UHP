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

function createRequestDiv (divNumber, requestNum, date, store, item, address, cancelled, completed, phoneNumber, username, testMode) {
  let requestString = requestNum.slice(1)
  console.log(requestString);
  let template = '<div class="row p-3 m-3 justify-content-between requests rounded-pill" id="request-' + requestString + '">' +
                 '  <div class="col">' + requestNum + '</div>' +
                 '  <div class="btn-group-toggle col-2 mr-5 mr-sm-3" id="requestToggler-' + divNumber + '" onclick="completeRequest(this, ' + "'" + requestString + "'" + ')">' +
                 '    <div class="pretty p-switch p-fill col-1 mr-5 my-auto completedSwitch">' +
                 '      <input type="checkbox" id="requestCheck-' + divNumber + '" check>' +
                 '      <div class="state p-info"><label></label></div>' +
                 '    </div>' +
                 '  </div>' +
                 '  <svg class="bi bi-chevron-right my-auto" id="modalToggle-' + divNumber + '" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">'+
                 '    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L10.293 8 4.646 2.354a.5.5 0 010-.708z" clip-rule="evenodd"/>' +
                 '  </svg> ' +
                 '</div>';
  if (cancelled) {
    $("#cancelledRequests").append(template)
    // if (userType == 1)
    document.getElementById('request-' + requestString).classList.add('requests-disabled')
    document.getElementById('requestToggler-' + divNumber).remove()
  } else {
    completed ? $("#completedRequests").append(template) : $("#uncompletedRequests").append(template)
    if (userType != 1)
      document.getElementById('requestToggler-' + divNumber).remove()
  }
  if (completed)
    document.getElementById('requestCheck-' + divNumber).setAttribute('checked', true)
  $("#modalToggle-" + divNumber).click(() => {
    $('#date').text(date);
    $('#requestNum').text(requestNum);
    $('#store').text(store);
    $('#items').text(item);
    $("#address").text(address);
    $("#phoneNumber").text(phoneNumber);
    userType == 1 ? $("#username").text(username) : $("usernameRow").css("display", "none")
    if (cancelled)
      $("#cancelledRequest").prop("disabled", true)
    $('#displayRequestModal').modal('show');
  })
}
