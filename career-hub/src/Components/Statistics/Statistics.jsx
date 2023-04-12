import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import "./Statistics.css"

const data = [
  {
    subject: 'Assignment 1',
    score: 60,
  },
  {
    subject: 'Assignment 2',
    score: 60,
  },
  {
    subject: 'Assignment 3',
    score: 60,
  },
  {
    subject: 'Assignment 4',
    score: 50,
  },
  {
    subject: 'Assignmnet 5',
    score: 60,
  },
  {
    subject: 'Assignment 6',
    score: 47,
  },
  {
    subject: 'Assignmnet 7',
    score: 60,
  },
];

const Statistics = () => {
  return (
    <div>
      <h1 className='marks-title'>The Radar Chart Shows 1st - 7th Assignment Marks</h1>
      <ResponsiveContainer width="100%" height={400}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar name="Score" dataKey="score" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
