import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
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
    // Add logic to handle login (e.g., make API call)
    console.log('Login form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className="container">
            <div class="sub-container">
            <h1>Login</h1>
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
            <div className="check">
                <a href="http://" id="got">Forgot Password?</a>
            </div>
            <button>Login</button>
            <p>Don't have an account? <Link to="/Register">Register</Link></p>
        </div>
        </div>
      </form>
  );
};

export default Login;
