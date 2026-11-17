const express = require("express");
const app = express();

app.get("/greeting", (req, res) => {
  const name = req.query.name || "visitor";
  res.type("text/plain");
  res.send("Hello, " + name);
});

module.exports = app;

