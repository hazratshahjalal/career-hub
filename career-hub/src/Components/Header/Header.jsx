import React, { useEffect, useState } from 'react';
import "./Header.css"
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';
import Featured from '../Featured/Featured';


const Header = () => {
  const categories = useLoaderData();

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
      <div className="category-header">
        <h1 className='category-title'>Job Category List</h1>
        <p className="category-description">Explore thousands of job opportunities with all the information you need. <br />
          It's your future. </p>
      </div>

      <div className="categories-container">
        {
          categories.map(category => <Category
            key={category.id}
            category={category}
          ></Category>)
        }
      </div>
      <div className="featured-container">
        <h1 className="category-title">Featured Jobs</h1>
        <p className="category-description">Explore thousands of job opportunities with all the information you need. <br />
          It's your future. </p>
        <div>
          {
            <Featured></Featured>
          }
        </div>
      </div>
    </div>
  );
};

export default Header;