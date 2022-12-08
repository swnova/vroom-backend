const {Player} = require('../models');

const resolvers = {
    Query: {
        players: async ()=>{
            return Player.find();
        },

        player: async (parent, { playerName }) => {
            return Player.findOne({ _id: playerId });
        },
        
    },

    Mutation: {
        addPlayer: async (parent, { playerName }) => {
            return Player.create({ playerName});
        },
        removePlayer: async (parent, {playerId}) => {
            return Player.findOneAndDelete({ _id: playerId});
        }
    }
};

module.exports = resolvers;