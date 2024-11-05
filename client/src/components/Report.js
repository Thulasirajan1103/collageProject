import React, { useState, useEffect } from 'react';
import { getAttendanceReport } from '../services/reportService';

const Report = () => {
  const [report, setReport] = useState([]);

  useEffect(() => {
    async function fetchReport() {
      const data = await getAttendanceReport();
      setReport(data);
    }
    fetchReport();
  }, []);

  return (
    <div>
      <h2>Attendance Report</h2>
      {report.map(item => (
        <div key={item.studentId}>
          <p>{item.studentName}: {item.attendancePercentage}%</p>
        </div>
      ))}
    </div>
  );
};

export default Report;
