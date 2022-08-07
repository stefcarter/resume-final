const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID!
    name: String!
    email: String!
    #no password field, need to keep passwords hidden
}

    type TokenUser {
    token: String
    user: User
    }

    type Query {
        users: [User]
        user(_id: String!): User

        me: User
    }

type Mutation {
    createMatchup(tech1: Stting!, tech2: String!); Matchup
    createVote(_id: string)

createUser(name: String!, email: String!, password: String!): User
login(email: String!, password: String!): Token User
}
`;

module.exports = typeDefs;