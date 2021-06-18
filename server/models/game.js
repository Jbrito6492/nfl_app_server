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

GameSchema.statics.addGames = function (schedule) {
  const Game = mongoose.model("game");
  Game.insertMany(schedule, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log("records have successfully been inserted into database");
    }
  });
};

mongoose.model("game", GameSchema);
