const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ScheduleSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  week: [
    {
      type: Schema.Types.ObjectId,
      ref: "game",
    },
  ],
});

ScheduleSchema.statics.findGame = function (id) {
  return this.findById(id)
    .populate("game")
    .then((week) => week.game);
};

mongoose.model("schedule", ScheduleSchema);
