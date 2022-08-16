const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');

router.post('/games/:id/reviews', reviewsCtrl.create);
router.get('/reviews/:id/edit', reviewsCtrl.edit);
router.delete('/reviews/:id', reviewsCtrl.delete);



module.exports = router;