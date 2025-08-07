const express = require("express");
const weatherRouter = require("./routes/weatherRoutes");
const globleErrorHandler = require("./controllers/errorController");

const app = express();

app.set("query parser", "extended"); // enable extended query parsing for URL parameters.

app.use(express.json()); // middleware that parse JSON request bodies into JavaScript objects.

app.get("/", (req, res) => {
  res.send("Hello from server guy!");
});

app.use("/api/weather", weatherRouter);

app.use(globleErrorHandler); // global error handling middleware that handles all errors passed via next().

module.exports = app;
