const express = require("express");
const RoutesApp = require("./routes/indexRoutes.js");
const connectDB = require("./db/connectDB.js");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
})

RoutesApp(app);
connectDB();


app.listen(port, () => {
  console.log(`The service is working in the port ${port}`);
});