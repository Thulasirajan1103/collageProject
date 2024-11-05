// server/controllers/studentController.js
const Student = require('../models/Student');

// Register a new student
const registerStudent = async (req, res) => {
    const { name, age, email, class: studentClass } = req.body;

    // Validate incoming data
    if (!name || !age || !email || !studentClass) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
        const newStudent = new Student({
            name,
            age,
            email,
            class: studentClass,
        });

        await newStudent.save();
        res.status(201).json({ message: 'Student registered successfully', student: newStudent });
    } catch (error) {
        console.error('Error registering student:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    registerStudent,
};
