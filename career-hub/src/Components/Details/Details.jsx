import React, { useEffect, useState } from 'react';
import "./Details.css"
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
  const { detailId } = useParams();

  const data = useLoaderData();
  console.log(data)

  const { id, company_logo, job_title, educational_requirements, experiences, contact_information, job_responsibility, job_description, company_name, remote_or_onsite, location, salary } = data;

  const [jobDetail, setJobDetail] = useState([]);

  useEffect(() => {
    const job = data.find(job => job.id == detailId);
    setJobDetail(job);
  }, [data, detailId]);


  return (
    <div>
      <h1 className='details-title'> Job Details </h1>
      <h1>This is detail {detailId}</h1>
      <p>Job Title:{job_title} </p>
      <p>Job Description: {job_description}</p>
      <p>Job Responsibilities: {job_responsibility}</p>
    </div>
  );
};

export default Details;
