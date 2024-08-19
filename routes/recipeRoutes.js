const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

router.post('/wishlist', recipeController.addToWishlist);
router.get('/wishlist', recipeController.getWishlist);
router.delete('/wishlist/:id', recipeController.deleteFromWishlist); // New DELETE route

module.exports = router;
