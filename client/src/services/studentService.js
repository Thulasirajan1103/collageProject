import axios from 'axios';

const baseURL = 'http://localhost:5000/api/students';

export const getStudents = async () => {
    return await axios.get(baseURL);
};


const registerStudent = async (studentData) => {
    try {
        const response = await axios.post('/api/students/register', studentData);
        return response.data;
    } catch (error) {
        throw error; // Re-throw to be handled in the component
    }
};

const studentService = {
    registerStudent,
};


export default studentService;
