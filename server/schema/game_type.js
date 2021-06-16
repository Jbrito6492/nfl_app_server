const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLID, GraphQLString } = graphql;
const DateType = require("./date_type");
const Game = mongoose.model("game");

const GameType = new GraphQLObjectType({
  name: "GameType",
  fields: () => ({
    id: { type: GraphQLID },
    awayTeam: { type: GraphQLString },
    homeTeam: { type: GraphQLString },
    stadium: { type: GraphQLString },
    location: { type: GraphQLString },
    dateTime: { type: DateType },
  }),
});

module.exports = GameType;
