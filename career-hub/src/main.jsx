import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu from './Components/Menu/Menu';
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';
import Header from './Components/Header/Header';





const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: "/home",
        element: <Header></Header>
      },
      {
        path: "/blogs",
        element: <Blog></Blog>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
