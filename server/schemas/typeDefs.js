const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type Matchup {
        _id: ID!
        form1: String!
        form2: String!
    }


    type User {
        _id: ID!
        name: String!
        email: String!
        # no password field, need to keep passwords hidden
    }

    type TokenUser {
        token: ID!
        user: User
    }

    type Query {
        users: [User]
        user(_id: String!): User

        me: User
    }

    type Mutation {
        createMatchup(form1: String!, form2: String!): Matchup

        createUser(name: String!, email: String!, password: String!): TokenUser
        createUserNoToken(name: String!, email: String!, password: String!): User
        login(email: String!, password: String!): TokenUser

    }
`;
// add new operator object for the tempalte database
module.exports = typeDefs;