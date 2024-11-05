import axios from 'axios';

const baseURL = 'http://localhost:5000/api/reports';

export const getAttendanceReport = async () => {
  return await axios.get(baseURL);
};
