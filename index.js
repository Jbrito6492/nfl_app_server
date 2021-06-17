const app = require("./server/server");
const port = process.env.PORT || 6969;
const url = process.env.URL || `http://localhost:${port}/graphql`;

app.listen(port, () => {
  console.log(`Running GraphQL API server at ${url}`);
});
