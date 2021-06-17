const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  game: {
    id: Schema.Types.ObjectId,
    awayTeam: { type: String },
    homeTeam: { type: String },
    location: { type: String },
    stadium: { type: String },
    dateTime: { type: Date },
  },
});

mongoose.model("game", GameSchema);
