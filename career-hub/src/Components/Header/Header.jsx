import React from 'react';
import "./Header.css"

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="header-left">
          <h1 className="header-title">Your Next <br /> Career Move <br /><span className='title-blue'>Starts Here</span> </h1>
          <p className="header-description">Find your dream job and take the next step in your career with our job hiring website. Browse job openings, apply with ease, and connect with top companies.
          </p>
          <div className="button">
            <button>Get Started</button>
          </div>
        </div>
        <div className="header-right">
          <img src="https://www.linkpicture.com/q/P3OLGJ1-copy-1_4.png" alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default Header;