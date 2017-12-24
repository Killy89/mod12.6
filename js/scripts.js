var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = $('#countries');


$('#search').click(searchCountries);

function searchCountries() {
    var countryName = $('#country-name').val();
    $.ajax({
        url: url + countryName,
        method: 'GET',
        success: showCountriesList,
        error: function errorActions() {
            if (countryName === '') {
                countriesList.empty();
                $('<h3>').text('Wpisz nazwę państwa').appendTo(countriesList);
            } else {
                errorCountry();
            }
        }
    });
}

function showCountriesList(resp) {
    countriesList.empty();
    resp.forEach(function(item){
        $('<img>').attr('src', item.flag).appendTo(countriesList);
        $('<h3>').text('Background Infromation: ').appendTo(countriesList);
        $('<li>').text('Country: ' + item.name).appendTo(countriesList);
        $('<li>').text('Capital: ' + item.capital).appendTo(countriesList);
    });
  }

  function errorCountry(resp) {
    countriesList.empty();
    $('<h3>').text('Nie ma takiego państwa').appendTo(countriesList);
}
