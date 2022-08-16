const express = require('express');
const router = express.Router();
const gameController = require('../controllers/games');
const isLoggedIn = require('../config/auth');

router.get('/', gameController.index);
router.get('/new', isLoggedIn, gameController.new);
router.get('/:id', gameController.show);
router.post('/', isLoggedIn, gameController.create);

module.exports = router;