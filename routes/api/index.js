const express = require("express");
const router = express.Router();
const playerRoutes = require("./playerRoutes")
const gameRoutes = require("./gameRoutes")
const questionRoutes = require("./questionRoutes")



router.use("/players", playerRoutes)
router.use("/games", gameRoutes)
router.use("/questions", questionRoutes)


router.use((req, res)=> res.send('Wrong route from api folder'));

module.exports = router;
