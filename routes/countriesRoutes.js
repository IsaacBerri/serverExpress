const express = require("express");
const controlles = require("../Controllers/indexControllers");

const router = express.Router();

router
  .get("/", controlles.getCountries)
  .get("/country/:code", controlles.getCountry)
  .get("/continent/:code", controlles.getContinent)
  .post("/", controlles.postCountry)
  .delete("/country/:code", controlles.deleteCountry)
  .put("/country/:code", controlles.putCountry);

module.exports = router;
