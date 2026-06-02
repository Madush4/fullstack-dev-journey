const API_KEY = "73101036f917b6e8eeafc0ecfa325b03";

export const getWeather = async (city) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
    );

    if(!response.ok){
        throw new Error ("City not found");
    }

    return await response.json();
}