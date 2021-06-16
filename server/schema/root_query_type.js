const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;
const ScheduleType = require("./schedule_type");
const GameType = require("./game_type");
const Schedule = mongoose.model("schedule");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    schedule: {
      id: { type: GraphQLID },
      type: new GraphQLList(ScheduleType),
      resolve() {
        return Schedule.find({});
      },
    },
    game: {
      type: GameType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Schedule.findById(id);
      },
    },
  }),
});

module.exports = RootQuery;
