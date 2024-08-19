const Recipe = require('../models/Recipe');

exports.addToWishlist = async (req, res) => {
  try {
    console.log(req.body);
    const { label, uri, image, source, url } = req.body;
    const newRecipe = new Recipe({ label, uri, image, source, url });
    await newRecipe.save();
    res.status(201).json({ message: 'Recipe added to wishlist' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add recipe to wishlist' });
    console.log(error);
  }
};

exports.getWishlist = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve wishlist' });
  }
};

exports.deleteFromWishlist = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRecipe = await Recipe.findByIdAndDelete(id);
    if (!deletedRecipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }
    res.status(200).json({ message: 'Recipe deleted from wishlist' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete recipe from wishlist' });
  }
};
