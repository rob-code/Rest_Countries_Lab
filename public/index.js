var app = function(){

  var url = "https://restcountries.eu/rest/v2";

  //load the data from the API
  makeRequest(url, requestComplete);
}


var saveCountry = function (country){
var state = JSON.parse(localStorage.getItem('countryStore')) || [];
state.push(country);
localStorage.setItem('countryStore', JSON.stringify(state));
}



var handleSelect = function(countries, countryName){

  var country = '';

  for (var i = 0; i < countries.length; i++){
    if (countries[i].name == countryName) {
      country = countries[i]
    }
  }

  saveCountry(country);

  var name = document.querySelector('#name');
  name.innerHTML = "Country Name: " + country.name;

  var pop = document.querySelector('#population');
  pop.innerHTML = "Population: " + country.population;

  var city = document.querySelector('#capital-city');
  city.innerHTML = "Capital City: " + country.capital;

  var flag = document.querySelector('img');
  flag.src = country.flag;
  flag.width = 160;


  var nativeName = document.querySelector('#native-name');
  nativeName.innerHTML = country.nativeName;

  var lat = country.latlng[0];
  var lng = country.latlng[1];

  position = {lat: lat, lng: lng};
  createMap(position);

}

var createMap = function (position) {

var mapDiv = document.getElementById('main-map')

  var map = new MapWrapper(mapDiv, position, 5);



} 


var populateList = function(countries){
  var select = document.querySelector('select')

  countries.forEach(function(country){
    var option = document.createElement('option');
    option.innerText = country.name;

    select.appendChild(option);
  })


  var select = document.querySelector('select');
  select.onchange = function(){
    handleSelect(countries, this.value);
  }

}

var requestComplete = function(){
  //check we get a http status 200
  console.log(this);

  if (this.status !== 200) return;

  //grab the response text
  var jsonString = this.responseText;

  //now parse the string into JSON string
  var countries = JSON.parse(jsonString);
  console.log(countries[0]);

  //hand off responsibility to another function for putting the list on our webpage
  populateList(countries);


}

var makeRequest = function(url, callback){
  //create a new XMLHttpRequest object
  var request = new XMLHttpRequest();

  //we are going to GET data 
  request.open("GET", url);

  //tell it what function to run once complete - register the event handler
  request.onload = callback; //.this (in this case) is the request object

  //send request
  request.send();
}

window.onload = app;
