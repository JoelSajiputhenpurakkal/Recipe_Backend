const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

router.post('/wishlist', recipeController.addToWishlist);
router.get('/wishlist', recipeController.getWishlist);

module.exports = router;
