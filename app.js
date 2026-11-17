const express = require("express");
const app = express();

app.get("/greeting", (req, res) => {
  const name = req.query.name || "visitor";
  res.send("<h1>Hello, " + name + "</h1>");
});

module.exports = app;
