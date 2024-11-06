const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController'); // Ensure the correct path

// Get all reports
router.get('/', reportController.getAllReports);

// Create a report
router.post('/', reportController.createReport);

module.exports = router;
