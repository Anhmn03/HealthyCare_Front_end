// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <span className="logo-icon">⚕️</span> HealthCare
        </Link>
      </div>
      <nav className="nav">
        <Link to="/find-doctor">Find Doctor</Link>
        <Link to="/healthy-a-z">Healthy A-Z</Link>
        <Link to="/buy-medicines">Buy Medicines</Link>
        <Link to="/insurance">Insurance</Link>
        <Link to="/ambulance-service">Ambulance Service</Link>
        <Link to="/health-calculator">Health Calculator</Link>
      </nav>
      <div className="">
        <button className="profile-btn">Profile</button>
      </div>
    </header>
  );
};

export default Header;