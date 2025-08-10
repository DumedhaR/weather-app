const axios = require("axios");
const NodeCache = require("node-cache");
const catchAsync = require("../utils/catchAsync");
const loadCityCodes = require("../utils/cityCodes");

const cityCodes = loadCityCodes(); // load city codes once before server starts to avoid repeated file reads.
const apiKey = process.env.OPENWEATHER_API_KEY;
const cache = new NodeCache({ stdTTL: 300, checkperiod: 60 }); // cache expires in 5 minutes

const getCachedOrFetch = async (cityId) => {
  const cachedData = cache.get(cityId);

  // return cached data if available.
  if (cachedData) {
    return { cityId, weatherData: cachedData, fromCache: true };
  }

  // fetch fresh data from the OpenWeatherMap API if there is no cached data.
  const url = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=metric&appid=${apiKey}`;

  try {
    const response = await axios.get(url);

    cache.set(cityId, response.data); // cache success response data for the current city ID.

    return { cityId, weatherData: response.data, fromCache: false };
  } catch (err) {
    console.error(`Error fetching city ${cityId}:`, err.message);

    return { cityId, error: "Failed to fetch weather data" }; // return sanitized error response.
  }
};

exports.getAllWeatherData = catchAsync(async (req, res, next) => {
  // fetch or serve cached weather data for each city ID in parallel.
  const weatherData = await Promise.all(
    cityCodes.map(async (cityId) => getCachedOrFetch(cityId))
  );

  // separate successful and failed responses.
  const success = weatherData.filter((r) => r.weatherData);
  const failed = weatherData.filter((r) => !r.weatherData);

  // send response with final results.
  const payload = {
    status: "success",
    results: success.length,
    data: success,
    failed: failed.length > 0 ? failed : undefined,
  };
  res.status(200).json(payload);
});

exports.getWeatherByCity = catchAsync(async (req, res, next) => {
  const cityId = req.params.id;

  if (!cityId) {
    return res
      .status(400)
      .json({ status: "fail", message: "City ID is required" });
  }
  const result = await getCachedOrFetch(cityId); // served from cache or fresh fetch

  if (result.error) {
    return res.status(500).json({ status: "error", message: result.error });
  }
  res.status(200).json({
    status: "success",
    data: result.weatherData,
    fromCache: result.fromCache,
  });
});
