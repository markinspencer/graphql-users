const express = require("express");
const expressGraphQL = require("express-graphql");

const port = 4000;

const app = express();
app.use("/graphql", expressGraphQL({ graphiql: true }));

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
