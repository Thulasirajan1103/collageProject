import React from 'react';
import StudentList from './components/StudentList';
import AttendanceForm from './components/AttendanceForm';
import StudentRegistrationForm from './components/StudentRegistrationForm';
import Report from './components/Report';
import Dashboard from './pages/Dashboard';
import './styles.css';

function App() {
  return (
    <div className="App">
      <h1>Student Attendance Log</h1>
      <AttendanceForm />
      <StudentRegistrationForm />
      <StudentList />
      <Dashboard />
      <Report />
    </div>
  );
}

export default App;
