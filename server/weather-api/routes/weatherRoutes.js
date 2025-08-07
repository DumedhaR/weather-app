const express = require("express");
const weatherCon = require("../controllers/weatherController");

const router = express.Router();

router.route("/").get(weatherCon.getAllWeatherData);

module.exports = router;
