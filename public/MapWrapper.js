var MapWrapper = function(container, coords, zoom){

  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });

  }

  // var controlDiv = document.createElement('div');
  // var centerControl = new CenterControl(controlDiv, this.googleMap);

  // controlDiv.index = 1;
  // this.googleMap.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(controlDiv);



// function CenterControl(controlDiv, map) {

//   var edinburgh = {lat: 55.9533, lng: -3.1883};
//   //var tamarama  

//   // Set CSS for the control border.
//   var controlUI = document.createElement('div');
//   controlUI.style.backgroundColor = '#fff';
//   controlUI.style.border = '2px solid #fff';
//   controlUI.style.borderRadius = '2px';
//   controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
//   controlUI.style.cursor = 'pointer';
//   controlUI.style.marginBottom = '18px';
//   controlUI.style.textAlign = 'center';
//   controlUI.title = 'Click to go to Edinburgh';
//   controlDiv.appendChild(controlUI);

//   // Set CSS for the control interior.
//   var controlText = document.createElement('div');
//   controlText.style.color = 'rgb(25,25,25)';
//   controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
//   controlText.style.fontSize = '12px';
//   controlText.style.lineHeight = '20px';
//   controlText.style.paddingLeft = '5px';
//   controlText.style.paddingRight = '5px';
//   controlText.innerHTML = 'Go To Edinburgh';
//   controlUI.appendChild(controlText);

//   // Setup the click event listeners: simply set the map to Chicago.


//   controlUI.addEventListener('click', function() {
  
//     map.setCenter(edinburgh);
//     controlUI.title = 'Click to go to Sydney';
//     controlText.innerHTML = 'Go to Sydney';
//     //map.controls[google.maps.ControlPosition.BOTTOM_CENTER].clear();
//   });

// }


// MapWrapper.prototype = {

//   addMarker: function(coords, contentString) {

//     var marker = new google.maps.Marker({
//       position: coords,
//       map: this.googleMap
//     });

//     var infoWindow = new google.maps.InfoWindow({
//       content: contentString
//     });

//     marker.addListener('click', function() {
//           infoWindow.open(this.googleMap, marker);
//         });
//   },

//   addClickEvent: function() {
  
//     var contentString = "<p>I don't know where you are but you clicked here</p>"

//     google.maps.event.addListener(this.googleMap, 'click', function(event){
//       var coords = {lat: event.latLng.lat(), lng: event.latLng.lng()};
//       this.addMarker(coords, contentString);
//     }.bind(this))
//   }


// }

