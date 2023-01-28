export function fetchCountries(searchCountry) {
    if (searchCountry === '') {
      return;
    }
    return fetch(
      `https://restcountries.com/v3.1/name/${searchCountry}?fields=name,capital,population,flags,languages`,
    ).then(response => {
      return response.json();
    });
  }