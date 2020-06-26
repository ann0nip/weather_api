const LocationService = require("../services/location.service");

const normalizeStr = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const getLocationByIp = async (req, res) => {
  try {
    const response = await LocationService.getLocationByIp(req)
    const { city, countryCode } = { ...response.data }
    // I normalize the city name 'cause some city names has accent
    // and break the weather API.
    res.json({ city: normalizeStr(city), countryCode: countryCode });
  } catch (err) {
    res.status(503).send(err);
  }
}

module.exports = {
  getLocationByIp
}