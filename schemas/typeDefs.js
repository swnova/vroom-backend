const {gql} = require('apollo-server-express');

const typeDefs = gql`
    type Player {
        _id: ID
        playerName: String
        playerScore: Number
        playerlvl: Number
    }

    type Query {
        players: [Player]!
        player(playerID: ID!): Player
    }

    type Mutation {
        addPlayer(name: String!): Player
        removePlayer(playerId: ID!): Player
    }
`;

module.exports = typeDefs