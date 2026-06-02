import { useState, useEffect } from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard";
import { getWeather } from "./services/weatherService";

function FavColor() {
  const [color, setColor] = useState("Blue");
  return (
    <>
      <h2>My favourite color is {color}</h2>
      <button onClick={() => setColor("Red")}>Red</button>
    </>
  );
}

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [count]);

  return <h1>I've rendered {count} times</h1>;
}

function WeatherApi() {
  const [inputValue, setInputValue] = useState("");
  const [city, setCity] = useState("Colombo");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchWeather = () => {
    if (!inputValue.trim()) return;
    setCity(inputValue.trim());
    setInputValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") searchWeather();
  };

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError("");
        const data = await getWeather(city);
        setWeather(data);
      } catch (err) {
        setError(err.message);
        setWeather(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <div>
      <h1>Weather App</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter City"
      />
      <button onClick={searchWeather}>Search</button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default WeatherApi;
