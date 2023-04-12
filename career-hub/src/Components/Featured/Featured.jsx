import React, { useState, useEffect } from 'react';
import Job from '../Job/Job';
import "./Featured.css"

const Featured = () => {
  const [featured, setFeatured] = useState([]);
  const [showCount, setShowCount] = useState(4);

  useEffect(() => {
    fetch("/featured.json")
      .then(res => res.json())
      .then(data => setFeatured(data))
  }, []);

  const handleShowMore = () => {
    setShowCount(showCount + 2); // Increase count by 2 to show 2 more items
  };

  return (
    <div className='job-box'>
      <div className="jobs-container">
        {featured.slice(0, showCount).map(job => (
          <Job key={job.id} job={job} />
        ))}
      </div>
      {showCount < featured.length && (
        <div>
          <button className="button-more" onClick={handleShowMore}>
            See all Jobs
          </button>
        </div>
      )}
    </div>
  );
};

export default Featured;
