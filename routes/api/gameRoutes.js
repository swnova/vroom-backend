const router = require('express').Router();
const {
    getGames,
    getSingleGame,
    createGame,
    deleteGame,
}= require('../../controllers/game-controller');

router.route('/').get(getGames).post(createGame)

router.route('/:gameId').get(getSingleGame).delete(deleteGame);

module.exports = router;