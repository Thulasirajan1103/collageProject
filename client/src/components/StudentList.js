import React, { useEffect, useState } from 'react';
import { getStudents } from '../services/studentService';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const data = await getStudents();
              setStudents(data);
          } catch (error) {
              setError('Failed to fetch student data');
          }
      };
      fetchData();
  }, []);

  if (error) {
      return <p>{error}</p>; // Show error message in the UI
  }
  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map(student => (
          <li key={student._id}>
            {student.name} ({student.class}) - 
            <input type="checkbox" name="attendance" /> Present
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
