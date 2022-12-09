const router = require('express').Router();
const {
    getPlayers,
    getSinglePlayer,
    createPlayer,
    deletePlayer,
    updatePlayer,
    playerLogin
}= require('../../controllers/player-controller');
const { authMiddleware } = require('../../utils/auth');

router.route('/').get(getPlayers).post(createPlayer);

router.route('/login').post(playerLogin);

router.route('/homepage').get(authMiddleware, getSinglePlayer);

router.route('/:playerId')
.get(getSinglePlayer)
.put(updatePlayer)
.delete(deletePlayer);

module.exports = router;