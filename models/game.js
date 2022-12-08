const { Schema, model } = require('mongoose');

const gameSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        
        questions: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Question'
            }

        ],
            
        rewardPoints: {
            type: Number 

        }
    }
);

const Game = model('Game', gameSchema);
module.exports = Game;