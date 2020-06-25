const LocationService = require("../services/location.service");

const getLocationByIp = async (req, res) => {
  try {
    const response = await LocationService.getLocationByIp(req)
    const { city } = { ...response.data }

    const cityNameNormalized = city.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    res.json({ city: cityNameNormalized });
  } catch (err) {
    res.status(500).send(err);
  }
}

module.exports = {
  getLocationByIp
}