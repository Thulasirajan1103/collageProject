import React, { useEffect, useState } from 'react';
import { getStudents } from '../services/studentService';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getStudents();
      setStudents(result.data);
    }
    fetchData();
  }, []);

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
