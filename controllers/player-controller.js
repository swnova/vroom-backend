
const { signToken } = require('../utils/auth');
const { Player, Game, Question } = require('../models');

// The `/api/players` endpoint

module.exports = {
    // get all players
    getPlayers(req, res) {
        Player.find()
        .then((players)=> res.json(players))
        .catch((err)=> res.status(500).json(err));
    },
    // get single player 
    getSinglePlayer(req, res) {
        Player.findOne({_id: req.params.playerId}, {playerName: req.params.playerName})
        .select('-_v')
        .then((player)=>
            !player
                ? res.status(404).json({ message: 'No player with that ID!'})
                : res.json(player)
        )
        .catch((err)=> res.status(500).json(err));
    },
    createPlayer({body}, res) {
        const player = Player.create(body);

        if (!player) {
            return res.status(400).json({message: 'Something is wrong.'});
        }
        const token = signToken(player);
        res.json({token, player});
    },
    deletePlayer(req, res) {
        Player.findOneAndDelete({_id: req.params.playerId})
            .then((player)=>
            !player
                ? res.status(404).json({message: 'No player with that ID!'})
                : res.json({message: "Player deleted!"})
            )
            .catch((err)=> res.status(500).json(err));
    },
    updatePlayer(req, res) {
        Player.findOneAndUpdate(
            {_id: req.params.playerId},
            { $set: req.body},
        )
        .then((player)=>
            !player
                ?res.status(404).json({ message: 'NO player exists with that ID'})
                : res.json(player)
        )
        .catch((err)=> {
            console.log(err);
            res.status(500).json(err);
        });
    },
     async playerLogin(req, res){
        const player = await Player.findOne({ $or: [{ email: req.body.email}] });
        if(!player) {
            console.log('wrong player')
            return res.status(400).json({ message: "Can't find this player" });
        }
        const correctPw = await player.isCorrectPassword(req.body.password);
        if (!correctPw) {
            console.log('wrong password')
            return res.status(400).json({ message: "Wrong Password." });
        } 
        const token = signToken(player);
        res.json({ token, player });

}
};

// get one player
// router.get('/:id', (req, res) => {
  // find a single player by its `id`
  // be sure to include its associated Category and Tag data
// });

// create account (Player) post

// login post

// update player info (can be used to level up) put

// delete a player