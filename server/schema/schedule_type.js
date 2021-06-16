const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLID, GraphQLList } = graphql;
const GameType = require("./game_type");
const Schedule = mongoose.model("schedule");

const ScheduleType = new GraphQLObjectType({
  name: "ScheduleType",
  fields: () => ({
    id: { type: GraphQLID },
    games: { type: GraphQLList },
    game: {
      type: new GraphQLList(GameType),
      resolve(parentValue) {
        return Schedule.findGame(parentValue.id);
      },
    },
  }),
});

module.exports = ScheduleType;
