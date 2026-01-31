// ----- DOM Elements -----
const weatherBtn = document.getElementById("get-weather-btn");
const selectEl = document.getElementById("city-select");
const weatherIcon = document.getElementById("weather-icon");
const locationEl = document.getElementById("location");
const weatherMainEl = document.getElementById("weather-main");
const mainTempEl = document.getElementById("main-temperature");
const feelsLikeEl = document.getElementById("feels-like");
const humidityEl = document.getElementById("humidity");
const windEl = document.getElementById("wind");
const windGustEl = document.getElementById("wind-gust");
const weatherInfoEl = document.getElementById("weather-info");

// ----- api url -----
const api = "https://weather-proxy.freecodecamp.rocks/api/city/";

// ----- Functions -----

// Function to Get Weather data
async function getWeather(city) {
  try {
    const response = await fetch(`${api}${city}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

// Function to show weather data
async function showWeather(city) {
  try {
    const data = await getWeather(city);
    if (!data) {
      alert("Something went wrong, please try again later.");
      return;
    }

    // safe access to nested properties
    const icon = data?.weather?.[0]?.icon || "";
    const locationName = data?.name || "N/A";
    const weatherMain = data?.weather?.[0]?.main || "N/A";
    const mainTemp = data?.main?.temp + " °C" || "N/A";
    const feelsLike = data?.main?.feels_like + " °C" || "N/A";
    const humidity = data?.main?.humidity + "%" || "N/A";
    const windSpeed = data?.wind?.speed + " m/s" || "N/A";
    const windGust =
      data?.wind?.gust !== undefined ? data.wind.gust + " m/s" : "N/A";

    // updating DOM elements
    weatherIcon.src = icon;
    locationEl.textContent = locationName;
    weatherMainEl.textContent = weatherMain;
    mainTempEl.textContent = mainTemp;
    feelsLikeEl.textContent = feelsLike;
    humidityEl.textContent = humidity;
    windEl.textContent = windSpeed;
    windGustEl.textContent = windGust;

    // making weather info div visible
    weatherInfoEl.style.display = "block";
  } catch (error) {
    alert("Something went wrong, please try again later.");
  }
}

// Event Listener
weatherBtn.addEventListener("click", () => {
  const city = selectEl.value;
  if (city) {
    showWeather(city);
  }
});
