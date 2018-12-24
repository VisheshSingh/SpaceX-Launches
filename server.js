const express = require("express");
const graphQLHTTP = require("express-graphql");
const schema = require("./schema");

const app = express();

app.use(
  "/graphql",
  graphQLHTTP({
    schema: schema,
    graphiql: true
  })
);

const PORT = process.env.port || 5000;

app.listen(PORT, () => console.log(`Server listening to ${PORT}...`));
