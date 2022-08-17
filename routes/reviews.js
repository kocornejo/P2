const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');

router.post('/games/:id/reviews', reviewsCtrl.create);
router.get('/reviews/:id/edit', reviewsCtrl.edit);
router.put('/reviews/:id', reviewsCtrl.updateReview)
router.delete('/reviews/:id', reviewsCtrl.deleteReview);



module.exports = router;