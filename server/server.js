const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const studentRoutes = require('./routes/studentRoutes');
const attendanceRoutes = require('./routes/attendanceRoutes');
const connectDB = require('./config');

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(cors()); // Apply CORS middleware once
app.use(express.json()); // Parse incoming JSON data

// Routes
app.use('/api/students', studentRoutes);
app.use('/api/attendance', attendanceRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
