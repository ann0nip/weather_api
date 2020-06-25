const express = require("express")
const router = express.Router()

const WeatherController = require("./controllers/weather.controller")

router.get("/current/:city?", WeatherController.getWeatherByCity);
router.get("/forecast/:city?", WeatherController.getForecastByCity);

module.exports = router