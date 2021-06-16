const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
const mongoose = require("mongoose");
const ScheduleType = require("./schedule_type");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addSchedule: {
      type: ScheduleType,
      args: {
        week: { type: GraphQLString },
      },
      resolve(parentValue, { week }) {
        return new Schedule({ week }).save();
      },
    },
  },
});

module.exports = mutation;
