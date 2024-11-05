const Attendance = require('../models/Attendance');
const Student = require('../models/Student');

// Controller to mark attendance
const markAttendance = async (req, res) => {
    const { classId, attendanceData } = req.body;

    // Validate incoming data
    if (!classId || typeof attendanceData !== 'object' || Object.keys(attendanceData).length === 0) {
        return res.status(400).json({ message: 'Invalid data. Please provide classId and attendanceData.' });
    }

    try {
        // Logic to mark attendance in the database
        const attendanceRecord = new Attendance({
            classId,
            attendanceData,
            date: new Date(), // Optionally record the date
        });
        
        await attendanceRecord.save();

        res.status(200).json({ message: 'Attendance marked successfully', attendanceRecord });
    } catch (error) {
        console.error('Error saving attendance:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
  

// Controller to fetch attendance reports for a specific class
const getAttendanceReport = async (req, res) => {
  try {
    const { classId } = req.params;

    if (!classId) {
      return res.status(400).json({ message: 'Class ID is required' });
    }

    // Find students in the class
    const students = await Student.find({ class: classId });

    // Fetch attendance records for each student
    const report = await Promise.all(students.map(async (student) => {
      const attendanceRecords = await Attendance.find({ studentId: student._id });

      const totalClasses = attendanceRecords.length;
      const presentCount = attendanceRecords.filter(record => record.status === 'Present').length;

      // Calculate attendance percentage
      const attendancePercentage = totalClasses > 0 ? (presentCount / totalClasses) * 100 : 0;

      return {
        studentId: student._id,
        studentName: student.name,
        attendancePercentage: attendancePercentage.toFixed(2)
      };
    }));

    res.status(200).json(report);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching attendance report' });
  }
};

module.exports = {
  markAttendance,
  getAttendanceReport
};
