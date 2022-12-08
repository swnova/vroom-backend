const router = require('express').Router();
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
        Player.findOne({_id: req.params.playerId})
        .select('-_v')
        .then((player)=>
            !player
                ? res.status(404).json({ message: 'No player with that ID!'})
                : res.json(player)
        )
        .catch((err)=> res.status(500).json(err));
    },
    createPlayer(req, res) {
        Player.create(req.body)
        .then((player) => res.json(player))
        .catch((err) => res.status(500).json(err));
    },
    deletePlayer(req, res) {
        Player.findOneAndDelete({_id: req.params.playerId})
            .then((player)=>
            !player
                ? res.status(404).json({message: 'No player with that ID!'})
                : res.json({message: "Player deleted!"})
            )
            .catch((err)=> res.status(500).json(err));
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