const express = require("express");
const morgan = require("morgan");
const { graphqlHTTP } = require("express-graphql");
const db = require("./database/config.js");
const app = express();
const schema = require("./schema/schema");

app.use(morgan("dev"));

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

module.exports = app;
