const router = require('express').Router();
const { Player, Game, Question } = require('../models');


module.exports = {
    // get all games (get)
    getGames(req, res) {
        Game.find()
        .then((games)=> res.json(games))
        .catch((err)=> res.status(500).json(err));
    },
    // get one game, include questions (get)
    getSingleGame(req,res){
        Game.findOne({_id: req.params.gameId})
        .populate({ path: 'questions', select: '-_v'})
        .then((game)=>
        !game
            ?res.status(404).json({message: 'No game matches that ID.'})
            : res.json(game)
        )
        .catch((err)=> res.status(500).json(err));
    },
    createGame(req, res) {
        Game.create(req.body)
        .then((game)=> res.json(game))
        .catch((err)=> res.status(500).json(err));
    },
    deleteGame(req,res) {
        Game.findOneAndRemove({_id: req.params.gameId})
        .then((game)=>
            !game
            ? res.status(404).json({message: 'NO game with that ID.'})
            : res.json(game)
        )
        .catch((err)=> res.status(500).json(err));
    }
}




// create a game 
//      create associated questions

// delete a game by id


