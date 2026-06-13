import { useState, useEffect } from "react";

function useWeatherInfo(city) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://wttr.in/${city}?format=j1`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [city]);
  console.log(data);
  return data;
}

export default useWeatherInfo;
