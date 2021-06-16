const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  schedule: {
    type: Schema.Types.ObjectId,
    ref: "schedule",
  },
  awayTeam: { type: String },
  homeTeam: { type: String },
  location: { type: String },
  stadium: { type: String },
  dateTime: { type: Date },
});

mongoose.model("game", GameSchema);
