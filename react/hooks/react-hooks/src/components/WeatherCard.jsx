function WeatherCard({ weather }) {
  return (
    <div>
      <h2>{weather.name}</h2>

      <p>Tempreature: {weather.main.temp} °C</p>
      <p>Weather: {weather.weather[0].description}</p>
      <p>Humidity: {weather.main.humidity} %</p>
    </div>
  );
}

export default WeatherCard;
