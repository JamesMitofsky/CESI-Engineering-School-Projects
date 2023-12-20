const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/restaurantRoute");
const bodyParser = require("body-parser");
const cors = require("cors");

const dbUrl = "mongodb://localhost:27017/mini-projet_resto";

async function connectDB() {
  try {
    await mongoose.connect(dbUrl);
    console.log("MongoDB successfully connected");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
}
const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use("/", routes);

app.listen(8080, () => {
  console.log("Server à l'écoute");
});
