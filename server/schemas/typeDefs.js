const { gql } = require('apollo-server-express');

const typeDefs = gql`

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
        createUser(name: String!, email: String!, password: String!): TokenUser
        createUserNoToken(name: String!, email: String!, password: String!): User
        login(email: String!, password: String!): TokenUser
    }
`;
// add new operator object for the tempalte database
module.exports = typeDefs;