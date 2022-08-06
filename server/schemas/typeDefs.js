const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID!
    name: String!
    email: String!
    
}
type Mutation {
    createMatchup(tech1: Stting!, tech2: String!); Matchup
    createVote(_id: string)
}
createUser(name: String!, email: String!, password: String!): User
}
`;
module.exports = typeDefs;