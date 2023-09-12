// Function to fetch country data from the API
async function fetchCountryData() {
    try {
      const response = await fetch('https://restcountries.com/v3/all');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
  
      // Randomly select a country from the API response
      const randomIndex = Math.floor(Math.random() * data.length);
      const selectedCountry = data[randomIndex];
  
      // Update the HTML with the country information
      const countryInfoElement = document.querySelector('.country-info');
      countryInfoElement.innerHTML = `
        <h2>${selectedCountry.name.common}</h2>
        <p>Capital: ${selectedCountry.capital}</p>
        <p>Population: ${selectedCountry.population.toLocaleString()}</p>
        <p>Region: ${selectedCountry.region}</p>
        <p>Subregion: ${selectedCountry.subregion}</p>
        <img src="${selectedCountry.flags.png}" alt="${selectedCountry.name.common} Flag" width="100">
      `;
    } catch (error) {
      console.error('Error fetching country data:', error);
      const countryInfoElement = document.querySelector('.country-info');
      countryInfoElement.innerHTML = '<p>Failed to load country information. Please try again later.</p>';
    }
  }
  
  // Execute the fetchCountryData function when the page loads
  window.addEventListener('load', fetchCountryData);
  