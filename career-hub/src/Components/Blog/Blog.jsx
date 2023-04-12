import React from 'react';
import './Blog.css'

const Blog = () => {
  return (
    <div>
      <h1 className='heading'>Some Questions to Know!</h1>
      <div className='question-container'>
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-semibold mb-4">1.When should we use context api?</h2>
            <p className="text-gray-700 mb-4" id="answer1">Context API is primarily used when some data needs to be accessible by many components at different nesting levels. The Context API helps share data between components which you can't easily share with props, for example, complex data objects. React Context API provides a way to send data and theme data through the component tree without sending any props manually at every level.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-semibold mb-4">2.What is custom hook in react?</h2>
            <p className="text-gray-700 mb-4" id="answer1">Hooks are reusable functions. In React, a custom Hook is a function that starts with the word “use” and may call other Hooks.Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-semibold mb-4">3.What is useRef?</h2>
            <p className="text-gray-700 mb-4" id="answer1">useRef is a hook which returns an object with a current property set to the value passed to the hook. useRefs provide a way to access DOM nodes or React elements created in the render method. In the typical React dataflow, props are the only way that parent components interact with their children. To modify a child, you re-render it with new props.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-semibold mb-4">4.What is useMemo?</h2>
            <p className="text-gray-700 mb-4" id="answer4">The React useMemo Hook returns a memoized value. React has a built-in hook called useMemo that allows you to memoize expensive functions so that you can avoid calling them on every render.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;