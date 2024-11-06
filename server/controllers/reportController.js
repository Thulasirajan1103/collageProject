const Report = require('../models/Report'); // Ensure Report model exists

// Get all reports
exports.getAllReports = async (req, res) => {
    try {
        const reports = await Report.find();
        res.json(reports);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch reports' });
    }
};

// Create a new report
exports.createReport = async (req, res) => {
    try {
        const report = new Report(req.body);
        await report.save();
        res.status(201).json(report);
    } catch (error) {
        res.status(400).json({ error: 'Failed to create report' });
    }
};
