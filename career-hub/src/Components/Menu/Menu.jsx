import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import "./Menu.css"

const Menu = () => {
  return (
    <div className="menu">
      <div className="logo-title">
        <h1><Link to="/">Job Source</Link></h1>
      </div>
      <nav className="menu-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="statistics">Statistics</Link></li>
          <li><Link to="appliedjobs">Applied Jobs</Link></li>
          <li><Link to="blogs">Blogs</Link></li>
        </ul>
      </nav>
      <div className="button">
        <button>Start Applying</button>
      </div>
    </div>

  );
};

export default Menu;