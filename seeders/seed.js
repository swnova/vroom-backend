const db = require('../config/connection');
const { Player, Game, Question } = require('../models');
const playerSeeds = require('./playerSeeds.json');
const questionSeeds = require('./questionSeeds.json');
const gameSeeds = require('./gameSeeds.json');