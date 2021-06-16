const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ScheduleSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  schedule: [
    {
      type: Schema.Types.ObjectId,
      ref: "game",
    },
  ],
});

SongSchema.statics.findGame = function (id) {
  return this.findById(id)
    .populate("game")
    .then((schedule) => schedule.game);
};

mongoose.model("schedule", ScheduleSchema);
