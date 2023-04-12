import React, { useState, useEffect } from 'react';
import Job from '../Job/Job';
import "./Featured.css"

const Featured = () => {
  let [featured, setFeatured] = useState([]);

  useEffect(() => {
    fetch("/featured.json")
      .then(res => res.json())
      .then(data => setFeatured(data))
  });
  return (
    <div className='job-box'>
      <div className="jobs-container">
        {
          featured.map(job => <Job
            key={job.id}
            job={job}
          ></Job>)
        }
      </div>
      <div >
        <button className="button-more">See all Jobs</button>
      </div>
    </div>

  )
}

export default Featured;