const CountryRoutes = require("./countriesRoutes.js");

const RoutesApp = (app) => {
    app.use("/countries", CountryRoutes);
}

module.exports = RoutesApp