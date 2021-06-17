const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
const mongoose = require("mongoose");
const Game = mongoose.model("game");
const DateType = require("./date_type");
const GameType = require("./game_type");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createGame: {
      type: GameType,
      args: {
        awayTeam: { type: GraphQLString },
        homeTeam: { type: GraphQLString },
        stadium: { type: GraphQLString },
        location: { type: GraphQLString },
        dateTime: { type: DateType },
      },
      resolve(parent, args) {
        return new Game(args).save();
      },
    },
  },
});

module.exports = mutation;
