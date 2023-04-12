import React from 'react';
import "./Category.css"

const Category = ({ category }) => {
  const { id, logo, name, jobs } = category;
  return (
    <div className='category-container'>
      <img src={logo} alt="" />
      <h2>{name}</h2>
      <p><span className='job-number'>{jobs}</span> jobs availble.</p>
    </div>
  );
};

export default Category;