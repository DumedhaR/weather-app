const express = require("express");
const loadCityCodes = require("./utils/cityCodes");

const app = express();

const cityCodes = loadCityCodes(); // load city codes once before server starts to avoid repeated file reads.

app.set("query parser", "extended"); // enable extended query parsing for URL parameters.

app.use(express.json()); // middleware that parse JSON request bodies into JavaScript objects.

app.get("/", (req, res) => {
  res.send("Hello from server guy!");
});

module.exports = app;
