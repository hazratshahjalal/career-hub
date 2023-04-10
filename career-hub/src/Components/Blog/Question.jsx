import React from 'react';
import './Question.css'

const Question = () => {
  return (
    <div>
      <h1 className='heading'>Some Questions to Know!</h1>
      <div className='question-container'>
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-semibold mb-4">1.Compare props vs state in react.</h2>
            <p className="text-gray-700 mb-4" id="answer1">The difference comes in which component the data are owned. State is owned locally and the component itself updates it. Props are owned and read-only by a parent. Props can be changed only if an upstream shift is caused by a callback function passed on to the child.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-semibold mb-4">2.How does useState work?</h2>
            <p className="text-gray-700 mb-4" id="answer1">useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-semibold mb-4">3.What is the purpose of useEffect other than fetching data?</h2>
            <p className="text-gray-700 mb-4" id="answer1">The useEffect in react js allows you to perform side effects in your components. The react useEffect examples of side effects include retrieving data, direct DOM updates, and timers.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-semibold mb-4">4.How Does React work?</h2>
            <p className="text-gray-700 mb-4" id="answer4">ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code..</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;