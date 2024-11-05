import axios from 'axios';

const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api',
});

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


export const getStudents = async () => {
    try {
        const response = await apiClient.get('/students');
        return response.data;
    } catch (error) {
        console.error('Error fetching students:', error.message);
        throw error; // Rethrow the error so it can be caught in the component
    }
};