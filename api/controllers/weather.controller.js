const WeatherService = require("../services/weather.service");

const getWeatherByCity = async (req, res) => {
  try {
    const response = await WeatherService.getWeatherByCity(req)
    const { name: city, weather, main: more } = { ...response.data }
    res.json({ city, weather, more });
  } catch (err) {
    res.status(503).send(err);
  }
}

const getForecastByCity = async (req, res) => {
  try {
    const response = await WeatherService.getForecastByCity(req)
    const { city, list } = { ...response.data }
    res.json({ city, list });
  } catch (err) {
    res.status(500).send(err);
  }
}

module.exports = {
  getWeatherByCity,
  getForecastByCity
}