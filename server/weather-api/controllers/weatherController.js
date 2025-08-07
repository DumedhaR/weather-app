const axios = require("axios");
const catchAsync = require("../utils/catchAsync");
const loadCityCodes = require("../utils/cityCodes");

const cityCodes = loadCityCodes(); // load city codes once before server starts to avoid repeated file reads.
const CITY_IDS = cityCodes.join(",");
const API_KEY = process.env.OPENWEATHER_API_KEY; // API key and URL defined outside handler since they remain the same across requests.
const URL = `http://api.openweathermap.org/data/2.5/group?id=${CITY_IDS}&units=metric&appid=${API_KEY}`;

exports.getAllWeatherData = catchAsync(async (req, res, next) => {
  // fetch weather data from Openweathermap API.
  const response = await axios.get(URL);
  console.log(response);

  // Send success response with weather data.
  res.status(200).json({
    status: "success",
    data: response,
  });
});
