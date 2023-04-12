import React, { useEffect, useState } from 'react';
import "./Details.css"
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
  const { detailId } = useParams();

  const data = useLoaderData();
  console.log(data)

  const [jobDetail, setJobDetail] = useState([]);

  useEffect(() => {
    const job = data.find(job => job.id === detailId);
    setJobDetail(job);
  }, [data, detailId]);


  return (
    <div>
      <h1 className='details-title'> Job Details </h1>
      <h1>This is detail {detailId}</h1>
      <p></p>
    </div>
  );
};

export default Details;
