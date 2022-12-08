const router = require('express').Router();
const {
    getGames,
    getSingleGame,
    createGame,
    deleteGame,
}= require('../../controllers/Game-controller');

router.route('/').get(getGames).post(createGame)

router.route('/:GameId').get(getSingleGame).delete(deleteGame);

module.exports = router;