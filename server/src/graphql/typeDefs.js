const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    fullName: String!
    email: String!
  }

  input UserInput {
    firstName: String!
    lastName: String!
    email: String!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User!
  }

  type Mutation {
    createUser(data: UserInput!): User!
    updateUser(id: ID, data: UserInput!): User!
    deleteUser(id: ID!): Boolean
  }
`;

module.exports = typeDefs;
