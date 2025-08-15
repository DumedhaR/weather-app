const express = require("express");
const weatherCon = require("../controllers/weatherController");
const authCon = require("../controllers/authController");

const router = express.Router();
router.use(authCon.jwtCheck); // protect all routes start here.
// router.use(authCon.checkUserPermissions); // authorise all rutes start here.
router.route("/").get(weatherCon.getAllWeatherData);

router.route("/:id").get(weatherCon.getWeatherByCity);

module.exports = router;
