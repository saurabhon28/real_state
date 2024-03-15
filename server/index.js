const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/auth");

const PORT = 3000;
const app = express();
require("dotenv").config();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_ATLAS_URI)
  .then(() => console.log("DB connected Successfully"))
  .catch(() => console.log("Connection Failed"));

app.use("/api", authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on server ${PORT}`);
});
