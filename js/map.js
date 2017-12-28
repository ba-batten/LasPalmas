
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 35.94, lng: -78.77},
    zoom: 10
  });
}

function mapsError() {
  alert("Map unavailable")
}
