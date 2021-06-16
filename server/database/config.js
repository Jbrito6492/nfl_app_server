const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/nfl_app_server", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("connected to MongoDB");
});

module.exports = db;
