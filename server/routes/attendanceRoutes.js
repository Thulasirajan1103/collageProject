const express = require('express');
const router = express.Router();

// Import the attendance controller
const {
  markAttendance,
  getAttendanceReport
} = require('../controllers/attendanceController');

// Define routes
router.post('/register', studentController.registerStudent); // Check this path and handler

// Route to mark attendance
router.post('/mark', markAttendance);

// Route to get attendance report for a class
router.get('/:classId', getAttendanceReport);

module.exports = router;
