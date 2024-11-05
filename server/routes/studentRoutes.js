const express = require('express');
const router = express.Router();
const Student = require('../models/Student');
const { registerStudent } = require('../controllers/studentController');

// Get all students
router.get('/', async (req, res) => {
  const students = await Student.find();
  res.json(students);
});
router.post('/register', studentController.registerStudent); // Check this path and handler

module.exports = router;
