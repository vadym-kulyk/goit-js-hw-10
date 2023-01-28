export function fetchCountries(searchCountry) {
  if (searchCountry === '') {
    return;
  }
  return fetch(
    `https://restcountries.com/v3.1/name/${searchCountry}?fields=name,capital,population,flags,languages`,
  )
  .then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  })
  .catch(error => {
    console.error('Error with the fetch request:', error);
  });
}