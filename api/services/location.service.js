const axios = require("axios");
const requestIp = require('request-ip');
require("dotenv").config();
const IP_API_URL = process.env.IP_API;

const getLocationByIp = async (req) => {
  try {
    const clientIp = requestIp.getClientIp(req)
    return await axios.get(
      `${IP_API_URL}/${clientIp}`
    );
  } catch (err) {
    throw new Error(err.message)
  }
}

module.exports = {
  getLocationByIp
}