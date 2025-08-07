const axios = require("axios");
const catchAsync = require("../utils/catchAsync");
const loadCityCodes = require("../utils/cityCodes");

const cityCodes = loadCityCodes(); // load city codes once before server starts to avoid repeated file reads.

const apiKey = process.env.OPENWEATHER_API_KEY; // reusable OpenWeatherMap API key.

exports.getAllWeatherData = catchAsync(async (req, res, next) => {
  // fetch weather data for each city ID in parallel.
  const weatherData = await Promise.all(
    cityCodes.map(async (cityId) => {
      const url = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}`;

      try {
        const response = await axios.get(url); // make API call for each city ID.
        return { cityId, data: response.data };
      } catch (err) {
        console.error(`Error fetching city ${cityId}:`, err.message); // log error internally.
        return { cityId, error: "Failed to fetch weather data" }; // return sanitized error response.
      }
    })
  );

  // separate successful and failed responses.
  const success = weatherData.filter((r) => r.data);
  const failed = weatherData.filter((r) => !r.data);

  // send response with results.
  res.status(200).json({
    status: "success",
    results: success.length,
    data: success,
    failed: failed.length > 0 ? failed : undefined,
  });
});
