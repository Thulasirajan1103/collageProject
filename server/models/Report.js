import axios from 'axios';

const fetchReport = async () => {
    try {
        const response = await axios.get('http://localhost:5000/api/reports');
        console.log(response.data); // Check if data is received correctly
    } catch (error) {
        console.error('Error fetching reports:', error);
    }
};

export default fetchReport;
