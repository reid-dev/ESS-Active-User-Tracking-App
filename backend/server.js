// External Imports
const express = require('express');

// Internal Imports
require('dotenv').config();
const connectDB = require('./config/db');

// Set Up Server
const app = express();

// Database Connection
connectDB();

// Middleware
app.use(express.json());

// Routes

// Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));