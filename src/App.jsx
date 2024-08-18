import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//components

//pages
import Home from './pages/Home';
import Login from './pages/Login';
import PasswordReset from './pages/PasswordReset';
import About from './pages/About';
import Signup from './pages/Signup';



function App() {

  const router = createBrowserRouter([
    { 
      path: "/",
      element: <Home/>
    },
    {
      path: "/login",
      element: <Login/>
    },
    { 
      path: "/about",
      element: <About/>
    },
    {
      path: "/resetPassword",
      element: <PasswordReset/>
    },
    {
      path: "/signup",
      element: <Signup/>
    }

  ])

  return (
    <>
    <RouterProvider router = {router} />
    </>
  )
  
}

export default App;

