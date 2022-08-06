// create mutation function/object
const { User, Matchup } = require('../models');
const {ObjectId } = require('mongoose').Types;

const resolvers = {
    Query: {
        matchups: async (parent, { _id }) => {
            const params = _id ? { _id } : {};
            return Matchup.find(params);
        },

        users: async () => {
            return User.find({});
        },

        user: async (parent, { _id }) => {
            return User.findOne({ _id: ObjectId(_id) });
        }

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


