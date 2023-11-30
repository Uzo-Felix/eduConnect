
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Users from './components/Users/Users';
import Content from './components/Content/Content';
import Contributions from './components/Contributions/Contributions';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/content" element={<Content />} />
            <Route path="/contributions" element={<Contributions />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
