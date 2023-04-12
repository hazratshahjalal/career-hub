import React, { useEffect, useState } from 'react';
import "./Details.css"
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {

  const { id } = useParams();
  const jobDetails = useLoaderData();
  console.log(jobDetails)

  const [jobDetail, setJobDetail] = useState({});
  useEffect(() => {
    if (jobDetails) {
      const eachDetail = jobDetails.find(dt => dt.id == id);
      console.log(eachDetail)
    }
  }, []);

  return (
    <div>
      <h1>job details </h1>
    </div>
  );
};

export default Details;