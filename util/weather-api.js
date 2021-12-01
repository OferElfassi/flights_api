const axios = require("axios");

exports.getWeather = async (city,apiKey) => {
  const weatherEndpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  try {
    const weather = await axios.get(weatherEndpoint);
    return {
      sky: weather.data.weather[0].description,
      humidity: weather.data.main.humidity,
      temp: weather.data.main.temp + " c",
    };
  } catch (e) {
    return null;
  }
};
