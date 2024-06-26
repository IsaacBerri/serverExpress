const express = require("express");
const RoutesApp = require("./routes/indexRoutes.js");
const connectDB = require("./db/connectDB.js");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(
  cors({
    origin: (origin, callback) => {
      const ACEPTED_ORIGINS = ["https://app-countries2.vercel.app/"];

      if (ACEPTED_ORIGINS.includes(origin)) {
        return callback(null, true);
      }

      if (!origin) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

RoutesApp(app);
connectDB();

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
