import React from 'react';
import StudentList from '../components/StudentList';
import AttendanceForm from '../components/AttendanceForm';
import Report from '../components/Report';
import './Dashboard.css';  // Optional, if you want to style the dashboard

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Teacher Dashboard</h1>

      {/* Section to mark attendance */}
      <section className="attendance-section">
        <h2>Mark Attendance</h2>
        <AttendanceForm />
      </section>

      {/* Section to display student list */}
      <section className="student-list-section">
        <h2>Student List</h2>
        <StudentList />
      </section>

      {/* Section to view attendance reports */}
      <section className="report-section">
        <h2>Attendance Report</h2>
        <Report />
      </section>
    </div>
  );
};

export default Dashboard;
