const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;
const GameType = require("./game_type");
const Game = mongoose.model("game");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    getSchedule: {
      type: new GraphQLList(GameType),
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parent, args) {
        return Game.find({});
      },
    },
  }),
});

module.exports = RootQuery;
