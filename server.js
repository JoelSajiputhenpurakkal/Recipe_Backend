const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors'); // Import the cors package
const recipeRoutes = require('./routes/recipeRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Database Connection
const conn = require('./services/db');
conn.dbConnection();

// Enable CORS for all origins (You can specify specific origins if needed)
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

// Routes
app.use('/api/recipes', recipeRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
