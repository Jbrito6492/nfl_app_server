const express = require("express");
const morgan = require("morgan");
const { graphqlHTTP } = require("express-graphql");
const database = require("./database/config.js");
const app = express();
const schema = require("./schema/schema");

database.init();
app.use(morgan("dev"));
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

module.exports = app;
