const fs = require("fs");
const path = require("path");

const loadCityCodes = () => {
  let cityCodes;
  const dataPath = path.resolve(__dirname, "../data/cities.json"); // resolve correct path to data file.

  try {
    const cities = JSON.parse(fs.readFileSync(dataPath, "utf-8")).List; // read file synchronously and parse JSON.
    cityCodes = cities.map((city) => city.CityCode); // extract city codes into an array.
  } catch (error) {
    console.error("Error reading city codes!", error);
    process.exit(1); // exit if the data file is missing or invalid, as it is critical for server functionality.
  }
  return cityCodes;
};

module.exports = loadCityCodes;
