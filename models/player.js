const { Schema, model } = require('mongoose');

const playerSchema = new Schema(
    {
        playerName: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
        },
        password: {
            type: String,
            required: true,
        },
        playerLvl: {
            type: Number
        }
    }
);

const Player = model('Player', playerSchema);
module.exports = Player;