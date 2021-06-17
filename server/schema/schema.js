const _ = require('lodash');
const graphql = require('graphql');
const { GraphQLSchema } = graphql;

const RootQuery = require('./root_query_type');
const Mutations = require('./mutations');

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutations
});