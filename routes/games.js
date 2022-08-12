const express = require('express');
const router = express.Router();
const gameController = require('../controllers/games');

router.get('/', gameController.index);

module.exports = router;