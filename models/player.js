const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
// change add on 
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
            type: Number,
            default: 0
        
        },
         picUrl: {
            type: string,
        }
    }
);

playerSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 4;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

playerSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const Player = model('Player', playerSchema);
module.exports = Player;
