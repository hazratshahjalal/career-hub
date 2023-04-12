import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu from './Components/Menu/Menu';
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';
import Header from './Components/Header/Header';
import Statistics from './Components/Statistics/Statistics';
import NotFound from './Components/NotFound/NotFound';




const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Header></Header>,
        loader: async ({ params }) => {
          return fetch(`/data.json`);
        },
      },
      {
        path: "/blogs",
        element: <Blog></Blog>
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "*",
        element: <NotFound></NotFound>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
