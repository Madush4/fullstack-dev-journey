import { useState } from "react";
import { WeatherCard } from "./components/index.js";
import useWeatherInfo from "./hooks/useWeatherInfo.jsx";

function App() {
  const [city, setCity] = useState("Colombo");
  const [searchCity, setSearchCity] = useState("Colombo");

  const data = useWeatherInfo(searchCity);
  const current = data?.current_condition?.[0];
  const area = data?.nearest_area?.[0];

  return (
    <div
      className="w-full h-screen flex  justify-center items-center bg-cover bg-no-repeat "
      style={{
        backgroundImage: `url(https://i.pinimg.com/736x/af/9b/73/af9b731bcd238263cd38379821da0384.jpg)`,
      }}
    >
      <div className="flex flex-col gap-10 items-center bg-gray-400/50 p-4 rounded-xl">
        <h2 className="text-2xl font-bold text-white text-shadow text-outline">
          Weather App
        </h2>
        <div className="bg-white/40 rounded-xl p-6 w-96 flex justify-between ">
          <input
            className="bg-white/70 px-5 py-2 rounded-lg font-medium"
            type="text"
            name=""
            id=""
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            className="bg-blue-600/80 px-2 py-2 rounded-xl text-white font-medium cursor-pointer"
            onClick={() => setSearchCity(city)}
          >
            Search
          </button>
        </div>

        <WeatherCard
          city={area?.areaName?.[0]?.value}
          temperature={current?.temp_C}
          humidity={current?.humidity}
          windspeed={current?.windspeedKmph}
          weatherDesc={current?.weatherDesc?.[0]?.value}
          feelsLike={current?.FeelsLikeC}
          weatherCode={current?.weatherCode}
        />
      </div>
    </div>
  );
}

export default App;
