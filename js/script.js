var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = document.getElementById('countries');


document.getElementById('search').addEventListener('click', searchCountries);


function searchCountries() {
    var countryName = document.getElementById('country-name').value;
    if(!countryName.length) countryName = 'Poland';
    fetch(url + countryName)
        .then(function(resp) {
            return resp.json();
        })
        .then(showCountriesList);
};

 

function showCountriesList(resp) {
    countriesList.innerHTML = '';
    resp.forEach(function(item){
	    var liEl = document.createElement('li');
	    liEl.innerHTML = '<header> ' +item.name +' </header>';
	   	liEl.innerHTML += '<div class="col"><p> Region: </p><p>' +item.region +' </p></div>';
	   	liEl.innerHTML += '<div class="col"><p> Capital </p><p>' +item.capital +' </p></div>';
	   	liEl.innerHTML += '<div class="col"><p> Native name: </p><p>' +item.nativeName +' </p></div>';
	   	liEl.innerHTML += '<div class="col"><p> Land area </p><p>' +item.area +' </p></div>';
	   	liEl.innerHTML += '<div class="col"><p> Population </p><p>' +item.population +' </p></div>';
	   	liEl.innerHTML += '<div class="col"><p> Language </p><p>' +item.demonym +' </p></div>';
	   	liEl.innerHTML += '<div class="col"><p> Currency </p><p>' +item.currencies +' </p></div>';

	    countriesList.appendChild(liEl);
    });
}

