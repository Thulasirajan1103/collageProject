import axios from 'axios';

const markAttendance = async (classId, attendanceData) => {
    try {
        const response = await axios.post('/api/attendance/mark', {
            classId,
            attendanceData,
        });
        return response.data;
    } catch (error) {
        console.error('Error marking attendance:', error);
        throw error; // Re-throw to be handled in the component
    }
};

export default { markAttendance };
