const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLNonNull } =
  graphql;
const mongoose = require("mongoose");
const Game = mongoose.model("game");
const DateType = require("./date_type");
const GameType = require("./game_type");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createGame: {
      type: GameType,
      description: "add a game",
      args: {
        awayTeam: { type: GraphQLNonNull(GraphQLString) },
        homeTeam: { type: GraphQLNonNull(GraphQLString) },
        stadium: { type: GraphQLNonNull(GraphQLString) },
        location: { type: GraphQLNonNull(GraphQLString) },
        dateTime: { type: GraphQLNonNull(DateType) },
      },
      resolve(parent, args) {
        return new Game(args).save();
      },
    },
    createSchedule: {
      type: GraphQLList(GraphQLNonNull(GameType)),
      description: "add a list of games",
      resolve(parent, args) {
        return Game.addGames(args);
      },
    },
  },
});

module.exports = mutation;
