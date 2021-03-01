/* --------------------------------------------
Google Map
-------------------------------------------- */

window.onload = MapLoadScript
function initMap() {
  var locations = [
    ["loan 1", 20.2863611, 85.8087653, "address 1"],
    ["loan 2", 20.4676977, 85.8719609, "address 2"],
    ["loan 3", 26.3508728, 92.6747667, "address 3"],
    ["loan 4", 18.1219473, 83.4000171, "address 4"],
    ["loan 5", 17.7393227, 83.2923849, "address 5"]
  ]

  var myOptions = {
    center: new google.maps.LatLng(23.742688, 79.212945),
    zoom: 5,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(document.getElementById("map"), myOptions)

  setMarkers(map, locations)

  var directionsService = new google.maps.DirectionsService()
  var directionsRenderer = new google.maps.DirectionsRenderer()
  var onChangeHandler = function() {
    calculateAndDisplayRoute(directionsService, directionsRenderer, map)
  }
  var getLocation = function() {
    findDealerLocation(map)
  }
  // document
  //   .getElementById("destinationBtn")
  //   .addEventListener("click", onChangeHandler)

  document.getElementById("getLocation").addEventListener("click", getLocation)
}

function setMarkers(map, locations) {
  var marker
  $.get("/dealerdata", function(data, status) {
    data.map(function(item) {
      // var loan = locations[i][0]
      var lat = item.latitude
      var long = item.longitude
      var add = item.DealerAddress

      latlngset = new google.maps.LatLng(lat, long)

      var marker = new google.maps.Marker({
        map: map,
        title: "Dealers",
        position: latlngset
      })
      //map.setCenter(marker.getPosition());

      var content =
        '<h6 style="text-align: left">' +
        item.TradeName +
        "</h6><br>" +
        '<p style="text-align: left">' +
        add +
        "</p>"

      var infowindow = new google.maps.InfoWindow()

      google.maps.event.addListener(
        marker,
        "click",
        (function(marker, content, infowindow) {
          return function() {
            infowindow.setContent(content)
            infowindow.open(map, marker)
          }
        })(marker, content, infowindow)
      )
    })
  })

  // var marker, i

  // for (i = 0; i < locations.length; i++) {
  //   var loan = locations[i][0]
  //   var lat = locations[i][1]
  //   var long = locations[i][2]
  //   var add = locations[i][3]

  //   latlngset = new google.maps.LatLng(lat, long)

  //   var marker = new google.maps.Marker({
  //     map: map,
  //     title: loan,
  //     position: latlngset
  //   })
  //   //map.setCenter(marker.getPosition());

  //   var content = "Loan Number: " + loan + "</h3>" + "Address: " + add

  //   var infowindow = new google.maps.InfoWindow()

  //   google.maps.event.addListener(
  //     marker,
  //     "click",
  //     (function(marker, content, infowindow) {
  //       return function() {
  //         infowindow.setContent(content)
  //         infowindow.open(map, marker)
  //       }
  //     })(marker, content, infowindow)
  //   )
  // }
}

function calculateAndDisplayRoute(directionsService, directionsRenderer, map) {
  directionsRenderer.setMap(map)
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        directionsService.route(
          {
            origin: `${pos.lat}, ${pos.lng}`,
            destination: {
              query: document.getElementById("destination").value
            },
            travelMode: "DRIVING"
          },
          function(response, status) {
            if (status === "OK") {
              directionsRenderer.setDirections(response)
            } else {
              window.alert("Directions request failed due to " + status)
            }
          }
        )
      },
      function() {
        handleLocationError(true, infoWindow, map.getCenter())
      }
    )
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter())
  }
}

function findDealerLocation(map) {
  var data = $("#dealerForm")
    .serializeArray()
    .reduce(function(obj, item) {
      obj[item.name] = item.value
      return obj
    }, {})
  $.get(`dealer/state/${data.stateId}/dist/${data.distId}`, function(res) {
    if (res.status) {
      var latLng = new google.maps.LatLng(
        res.data[0].latitude,
        res.data[0].longitude
      )
      map.setZoom(17)
      map.panTo(latLng)
      document.getElementById("dealerErrorMsg").innerHTML = ""
    } else {
      document.getElementById("dealerErrorMsg").innerHTML = res.data
    }
  }).error(function(err) {
    alert(err)
  })
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null)
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE)
  }
}

function MapLoadScript() {
  initMap()
}
