const User = require("../model/user");

//A function that resolves a value for a type Users
const resolvers = {
  Query: {
    users: () => User.find(),
    user: (_, { id }) => User.findById(id),
  },
  Mutation: {
    createUser: (_, { data }) => User.create(data),
    updateUser: (_, { id, data }) => User.findByIdAndUpdate(id, data),
    deleteUser: async (_, { id }) => !!(await User.findByIdAndDelete(id)),
  },
};

module.exports = resolvers;
