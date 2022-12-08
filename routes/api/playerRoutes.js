const router = require('express').Router();
const {
    getPlayers,
    getSinglePlayer,
    createPlayer,
    deletePlayer,
    updatePlayer
}= require('../../controllers/player-controller');

router.route('/').get(getPlayers).post(createPlayer);

router.route('/:playerId')
.get(getSinglePlayer)
.put(updatePlayer)
.delete(deletePlayer);

module.exports = router;