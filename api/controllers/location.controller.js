const LocationService = require("../services/location.service");

const getLocationByIp = async (req, res) => {
  try {
    const response = await LocationService.getLocationByIp(req)
    const { regionName: city } = { ...response.data }

    res.json({ city });
  } catch (err) {
    res.status(500).send(err);
  }
}

module.exports = {
  getLocationByIp
}