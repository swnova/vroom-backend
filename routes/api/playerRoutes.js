const router = require('express').Router();
const {
    getPlayers,
    getSinglePlayer,
    createPlayer,
    deletePlayer,
}= require('../../controllers/player-controller');

router.route('/').get(getPlayers).post(createPlayer)

router.route('/:playerId').get(getSinglePlayer).delete(deletePlayer);

module.exports = router;