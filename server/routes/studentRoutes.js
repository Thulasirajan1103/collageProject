const express = require('express');
const router = express.Router();
const Student = require('../models/Student');
const { registerStudent } = require('../controllers/studentController'); // Import registerStudent directly

// Get all students
router.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch students' });
  }
});

// Register a new student
router.post('/register', registerStudent); // Use registerStudent directly

module.exports = router;
