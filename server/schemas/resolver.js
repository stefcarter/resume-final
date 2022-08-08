// create mutation function/object
const { User, Matchup } = require('../models');
const { ObjectId } = require('mongoose').Types;
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require("../utils/auth");

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
        },

        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id });
            }
            throw new AuthenticationError('You need to be logged in!');
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
        },

        login: async (parent, { name, email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user with this email found!');
            }

            // check the password
            const correctPw = await user.comparePassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect password!');
            }
            // make sure user exist


            // check password

            // get the user a token 
            const token = signToken(user);
            return { token, user };
        }

    },
};

module.exports = resolvers;


