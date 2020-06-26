const axios = require("axios");
const LocationService = require("./location.service");
require("dotenv").config();

const WEATHER_URL = process.env.WEATHER_API;
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

const getCityByIp = async (req) => {
  const response = await LocationService.getLocationByIp(req);
  return response.data.city;
};

const getWeather = async (city) => {
  return await axios.get(
    `${WEATHER_URL}/weather?q=${city}&units=metric&appid=${WEATHER_API_KEY}`
  );
};

const getForecast = async (city) => {
  return await axios.get(
    `${WEATHER_URL}/forecast?q=${city}&units=metric&appid=${WEATHER_API_KEY}`
  );
};

const getWeatherByCity = async (req) => {
  try {
    let city = req.params.city;
    if (!city) {
      city = await getCityByIp(req);
    }
    const response = await getWeather(city);

    return response;
  } catch (err) {
    throw new Error(err.message);
  }
};
const getForecastByCity = async (req) => {
  try {
    let city = req.params.city;
    if (!city) {
      city = await getCityByIp(req);
    }
    const response = await getForecast(city);
    return response;
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = {
  getWeatherByCity,
  getForecastByCity,
};
