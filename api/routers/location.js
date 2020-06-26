const express = require("express")
const router = express.Router()
const LocationController = require("../controllers/location.controller")

router.get("/location", LocationController.getLocationByIp)

module.exports = router