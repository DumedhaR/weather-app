import express from "express";

const app = express();

app.set("query parser", "extended");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from server guy!");
});

export default app;
