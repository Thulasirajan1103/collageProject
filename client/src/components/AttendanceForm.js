
import axios from 'axios';

const AttendanceForm = () => {
    const [classId, setClassId] = useState('');
    const [attendanceData, setAttendanceData] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (studentId, isPresent) => {
        setAttendanceData(prevData => ({
            ...prevData,
            [studentId]: isPresent,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/attendance/mark', {
                classId,
                attendanceData,
            });
            console.log('Attendance marked successfully:', response.data);
            setErrorMessage(''); // Clear previous error messages
        } catch (error) {
            console.error('Error marking attendance:', error);
            setErrorMessage(error.response?.data?.message || 'An unknown error occurred');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Class ID" 
                value={classId} 
                onChange={e => setClassId(e.target.value)} 
                required 
            />
            {/* Assuming you have a list of students */}
            {/* Example Student Input */}
            <div>
                <label>
                    Student 1
                    <input 
                        type="checkbox" 
                        onChange={e => handleInputChange('student1Id', e.target.checked)} 
                    />
                </label>
            </div>
            {/* Repeat for other students */}
            <button type="submit">Mark Attendance</button>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </form>
    );
};

export default AttendanceForm;
