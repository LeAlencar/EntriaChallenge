const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const typeDefs = require("./src/graphql/typeDefs");
const resolvers = require("./src/graphql/resolvers");
const { ApolloServer } = require("apollo-server-express");

const app = express();

dotenv.config();
const url = process.env.MONGODB_URI;

const connect = mongoose.connect(url, { useNewUrlParser: true });
connect.then(
  (db) => {
    console.log("Connected correctly to server!");
  },
  (err) => {
    console.log(err);
  }
);
const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
});

server.applyMiddleware({ app });
app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
