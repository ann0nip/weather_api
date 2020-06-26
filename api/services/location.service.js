const axios = require("axios");
const requestIp = require('request-ip');
require("dotenv").config();
const IP_API_URL = process.env.IP_API;

const getLocationByIp = async (req) => {
  // Using the App in localhost request-ip
  // return '::1' or ::ffff:127.0.0.1
  // so by default the location will by Buenos Aires

  try {
    const clientIp = requestIp.getClientIp(req)
    if (clientIp === '::1' || clientIp === '::ffff:127.0.0.1') {
      return { data: { city: 'Buenos Aires', countryCode: 'AR' } }
    } else {
      return await axios.get(
        `${IP_API_URL}/${clientIp}`
      )
    }
  } catch (err) {
    throw new Error(err.message)
  }
}

module.exports = {
  getLocationByIp
}