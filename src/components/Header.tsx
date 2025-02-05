import React from 'react';
import '../styles/header.css'

const Header: React.FC = () => {
  return (
    <div className="title-bar">
      <span className="logo">G</span>
      <h1 className="title">My Gallery</h1>
    </div>
  );
};

export default Header;
