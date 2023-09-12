// Constants for your API key and the API endpoint
const apiKey = '24877e961dba334819a71d0cbd047106'; // Replace with your actual API key
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Elements from the HTML
const weatherDataElement = document.querySelector('.weather-data');

// Function to fetch weather data
async function fetchWeatherData(cityName) {
  try {
    const response = await fetch(`${apiUrl}?q=${cityName}&appid=${apiKey}&units=metric`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
}

// Function to update the weather information on the webpage
function updateWeatherInfo(weatherInfo) {
  if (weatherInfo) {
    const { name, main, weather } = weatherInfo;
    const temperature = main.temp;
    const description = weather[0].description;
    
    const weatherHTML = `
      <h2>Weather in ${name}</h2>
      <p>Temperature: ${temperature}°C</p>
      <p>Weather: ${description}</p>
    `;
    
    weatherDataElement.innerHTML = weatherHTML;
  } else {
    weatherDataElement.innerHTML = '<p>Failed to fetch weather data</p>';
  }
}

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();
  const cityName = event.target.city.value.trim();
  if (cityName) {
    fetchWeatherData(cityName)
      .then(updateWeatherInfo)
      .catch(error => console.error('Error:', error));
  }
}

// Attach the form submission handler
const weatherForm = document.querySelector('form');
weatherForm.addEventListener('submit', handleFormSubmit);
