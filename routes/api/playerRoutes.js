const router = require('express').Router();
const {
    getPlayers,
    getSinglePlayer,
    createPlayer,
    deletePlayer,
    updatePlayer,
    playerLogin,
}= require('../../controllers/player-controller');

router.route('/').get(getPlayers).post(createPlayer);

router.route('/login').post(login)

router.route('/:playerId')
.get(getSinglePlayer)
.put(updatePlayer)
.delete(deletePlayer);

module.exports = router;