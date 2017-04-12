var app = function(){

  var url = "https://restcountries.eu/rest/v2";

  //load the data from the API
  makeRequest(url, requestComplete);


}




var handleSelect = function(countries, item){

  console.log(countries)
  console.log(item)

  var popTag = document.querySelector('#population');
  popTag.innerHTML = "test";

  // var populationTag = document.querySelector('')

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
