document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const GetWeatherBtn = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityName = document.getElementById("city-name");
  const temperatureDisplay = document.getElementById("temperature");
  const descriptionDisplay = document.getElementById("description");
  const errorMessage = document.getElementById("error-message");
  const API_KEY = "73101036f917b6e8eeafc0ecfa325b03"; //env variables
  GetWeatherBtn.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (!city) return;

    //it may throw an error
    // server / database always in another continent

    try {
      const weatherData = await fetchWeatherData(city);
      displayWeatherData(weatherData);
    } catch (error) {
      showError();
    }
  });

  async function fetchWeatherData(city) {
    // gets data
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}
`;
    const response = await fetch(url);
    console.log(typeof response);
    console.log("RESPONSE", response);

    if (!response.ok) {
      throw new Error("City not found.");
    }

    const data = await response.json();

    return data;
  }

  function displayWeatherData(data) {
    console.log(data);
    const { name, main, weather } = data;
    cityName.textContent = name;
    temperatureDisplay.textContent = `Temperature : ${main.temp}`;
    descriptionDisplay.textContent = `Weather : ${weather[0].description}`;
    weatherInfo.classList.remove("hidden");
    weatherInfo.classList.add("flex flex-col");
    errorMessage.classList.add("hidden");
    
  }

  function showError() {
    weatherInfo.classList.remove("hidden");
    errorMessage.classList.add("hidden");
  }
});
