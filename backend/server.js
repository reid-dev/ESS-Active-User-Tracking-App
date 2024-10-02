// Imports
const express = require('express');
require('dotenv').config();

// Set Up Server
const app = express();


// Middleware
app.use(express.json());

// Routes

// Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));