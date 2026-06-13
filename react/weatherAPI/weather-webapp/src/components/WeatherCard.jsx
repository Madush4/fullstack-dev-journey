import React from "react";

function WeatherCard({
  city,
  temperature,
  humidity,
  windspeed,
  weatherDesc,
  feelsLike,
  weatherCode,
}) {
    const getEmoji = (weatherCode) => {
      if (weatherCode == 113) return "☀️";
      if (weatherCode == 116) return "⛅";
      if (weatherCode == 119) return "☁️";
      if (weatherCode == 296) return "🌧️";
      if (weatherCode == 200) return "⛈️";
      if (weatherCode == 353) return "🌦️";
      return "🌤️";
    };
  return (
    <div className="flex  justify-center max-w-full flex-col gap-2">
     

      <div 
      className="bg-white/70 rounded-xl p-6 w-96 flex flex-col font-medium"
      >

        <p>Temperature : {temperature} {getEmoji(weatherCode)} </p>
        <p>Humidity : {humidity}</p>
        <p>Wind Speed : {windspeed}</p>
        <p>Weather Desc : {weatherDesc}</p>
        <p>Feel like : {feelsLike}</p>
      
      </div>
    </div>
  );
}

export default WeatherCard;
