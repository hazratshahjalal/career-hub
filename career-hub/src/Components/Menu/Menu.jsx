import React from 'react';
import { Outlet } from 'react-router-dom';
import "./Menu.css"

const Menu = () => {
  return (
    <div class="menu">
      <div class="logo-title">
        <h1>Job Source</h1>
      </div>
      <button class="menu-toggle" aria-label="Toggle Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav class="menu-items">
        <ul>
          <li><a href="#">Item 3</a></li>
          <li><a href="#">Item 2</a></li>
          <li><a href="#">Item 1</a></li>
        </ul>
      </nav>
      <div class="button">
        <button>Start Applying</button>
      </div>
    </div>

  );
};

export default Menu;