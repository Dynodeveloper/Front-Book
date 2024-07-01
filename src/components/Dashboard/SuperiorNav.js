import React from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../profile/profileimage';
import './Dashboard.css';  // Assuming a stylesheet for styling

const SuperiorNav = ({ profileImage }) => {
  return (
    <nav className="superior-nav">
      <profileImage />
      <p><Link to="/perfil">Perfil</Link></p>
      <p><Link to="/about">about</Link></p>
      <p><Link to="/">Log Out</Link></p>
      {/* Navigation links or buttons here */}
    </nav>
  );
};

export default SuperiorNav;
