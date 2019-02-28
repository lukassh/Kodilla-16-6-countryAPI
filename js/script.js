var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = document.getElementById('countries');

document.getElementById('search').addEventListener('click', searchCountries);

function searchCountries() {
    var countryName = document.getElementById('country-name').value;
};

function searchCountries() {
    var countryName = document.getElementById('country-name').value;
    if(!countryName.length) countryName = 'Poland';
};

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
}

function showCountriesList(resp) {
    countriesList.innerHTML = '';
    resp.forEach(function(item) {
        resp.forEach(function(item){
		    var liEl = document.createElement('li');
		    liEl.innerText = (item.name + ', Stolica :' +item.capital);
		    countriesList.appendChild(liEl);
		});//Here is the code that will execute on each successive item in the collection. A single item is hidden under an item variable.
    });
}

