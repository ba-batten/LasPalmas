
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 35.94, lng: -78.77},
    zoom: 10
  });

  //
  // Add markers
  //
  model.data.locations.locs.forEach(function(location) {
    var marker = new google.maps.Marker({
          position: {lat: 35.94, lng: -78.77},
          map: map,
          title: location.description
        });
        console.log(marker);
    });

};

function mapsError() {
  alert("Map unavailable")
};
