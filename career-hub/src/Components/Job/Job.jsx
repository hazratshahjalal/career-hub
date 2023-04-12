import React from 'react';
import "./Job.css"

const Job = (props) => {
  const { id, company_logo, job_title, company_name, remote_or_onsite, location, salary } = props.job;
  return (
    <div className='job-container'>
      <img src={company_logo} alt="" />
      <h1>{job_title}</h1>
      <h4>{company_name}</h4>
      <div className="type">
        {remote_or_onsite}
      </div>
      <div className="location">
        <p> Location: {location}</p>
        <p><span className='dollar'>$</span> Salary: {salary}</p>
      </div>
      <button className="job-details">View Details</button>
    </div>
  );
};

export default Job;