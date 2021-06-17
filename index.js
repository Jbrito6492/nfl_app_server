const app = require("./server/server");
const port = process.env.PORT || 8000;
const url = process.env.URL || `http://localhost:${port}/graphql`;

app.listen(port, () => {
  console.log(`Running a GraphQL API server at ${url}`);
});
