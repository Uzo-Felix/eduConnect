import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle registration (e.g., make API call)
    console.log('Registration form submitted:', formData);
  };

  return (
      <form onSubmit={handleSubmit}>
        {/* <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Register</button> */}
        <div className="container">
            <div class="sub-container">
            <h1>Register</h1>
            <input
            type="text"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            />
            <input
            type="email"
            placeholder="Email ID" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            />
            <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            />
            <button>Register</button>
            <p>Already have an account? <Link to="/Login">Login</Link></p>
            </div>
            </div>
      </form>
  );
};

export default Register;
