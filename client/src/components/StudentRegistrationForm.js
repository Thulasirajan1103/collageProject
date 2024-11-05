// client/src/components/StudentRegistrationForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './StudentRegistrationForm.css'; // Import the CSS file


const StudentRegistrationForm = () => {
    const [studentData, setStudentData] = useState({
        name: '',
        age: '',
        email: '',
        class: '',
    });
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudentData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/students/register', studentData);
            console.log('Student registered successfully:', response.data);
            setStudentData({ name: '', age: '', email: '', class: '' }); // Clear form
            setErrorMessage(''); // Clear previous error messages
        } catch (error) {
            console.error('Error registering student:', error);
            setErrorMessage(error.response?.data?.message || 'An unknown error occurred');
        }
    };

    return (
        <div className="registration-container">
            
            <h2>Student Registration</h2>
            <form onSubmit={handleSubmit} className="registration-form">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={studentData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={studentData.age}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={studentData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="class"
                    placeholder="Class"
                    value={studentData.class}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Register Student</button>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </form>
        </div>
    );
};

export default StudentRegistrationForm;
