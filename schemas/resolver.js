// create mutation function/object
const { User, template } = require('../models');

const resolvers = {
    Query: {

    },

Mutation: {

    createMatchup: async (parent, args) => {
        const matchup = await Matchup.create(args);
        return matchup;
    },
    
    createUser: async (parent, { name, email, password }) => {
        const user = await User.create({ name, email, password });

        return user;
    }
},
};

module.exports = resolvers;


