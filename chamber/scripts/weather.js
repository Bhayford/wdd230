// Select HTML elements in the document
const weatherIconElement = document.getElementById('weather-icon');
const temperatureElement = document.getElementById('current-temp');
const conditionElement = document.querySelector('figcaption');
const windSpeedElement = document.getElementById('windSpeed');
const windChillElement = document.getElementById('windChill');

// OpenWeatherMap API key
const apiKey = 'e4e9a3c6630e45e25eac6d6e2f048af1';

// API endpoint for weather data
const url = `https://api.openweathermap.org/data/2.5/weather?q=accra,ghana&appid=${apiKey}&units=imperial`;

// Defined asynchronous function to fetch data from the API
async function apiFetch() {
  try {
    // Fetch data from the API
    const response = await fetch(url);

    // Check if the response is successful
    if (response.ok) {
      // Parse the JSON data from the response
      const data = await response.json();

      // Log the data to the console (for debugging purposes)
      console.log(data);

      // Extract relevant information from the data object
      const temperature = Math.round(data.main.temp); // Round temperature to a whole number
      const windSpeed = data.wind.speed;
      const iconCode = data.weather[0].icon;
      const condition = capitalizeFirstLetter(data.weather[0].description);

      // Update HTML elements with the retrieved data
      weatherIconElement.src = `https://openweathermap.org/img/w/${iconCode}.png`;
      temperatureElement.textContent = temperature;
      conditionElement.textContent = condition;
      windSpeedElement.textContent = `Wind Speed: ${Math.round(windSpeed)} m/s`;
      windChillElement.textContent = `Wind Chill: ${Math.round(calculateWindChill(temperature, windSpeed))} m/s`; // Round wind chill to a whole number
    } else {
      // Handle non-successful response (e.g., display an error message)
      throw Error(await response.text());
    }
  } catch (error) {
    // Log any errors that occur during the fetch process
    console.log('An error occurred while fetching weather data:', error);
  }
}

// Function to capitalize the first letter of each word
function capitalizeFirstLetter(string) {
  return string.replace(/\b\w/g, (match) => match.toUpperCase());
}

// Function to calculate wind chill
function calculateWindChill(temperature, windSpeed) {
  const windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
  return windChill;
}

// Call the function to fetch and display weather data
apiFetch();
