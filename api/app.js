const express = require("express");
const mongoose = require("mongoose");

require("./config/db.config");

const app = express();

app.use((req, res, next) => {
    res.set("Access-Control-Allow-Origin", "http://localhost:3000");
    res.set("Access-Control-Allow-Headers", "content-type");
    res.set("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
    res.set("Access-Control-Allow-Credentials", "true");
    res.set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
    next();
  })

const routes = require("./config/routes.config");
app.use("/api/v1", routes);

const port = 3001;

app.listen(port, () =>
  console.log(`Phones API running at port ${port}`)
);

module.exports = app;