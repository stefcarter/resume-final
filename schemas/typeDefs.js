`type User {
    
}
type Mutation {
    createMatchup(tech1: Stting!, tech2: String!); Matchup
    createVote(_id: string)
}
createUser(name: String!, email: String!, password: String!): User
}
`;