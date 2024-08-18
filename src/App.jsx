import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Components
import RedirectBasedOnUserType from './components/RedirectBasedOnUserType';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import PasswordReset from './pages/PasswordReset';
import About from './pages/About';
import Signup from './pages/Signup';
import UserType from './pages/UserType';
import FreelancerHomePage from './pages/FreelancerHomePage'; 
import ClientHomePage from './pages/ClientHomePage';

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
    },
    {
      path: "/usertype",
      element: <UserType/>
    },
    {
      path: "/freelancer-homepage", // Route for Freelancer Home
      element: <FreelancerHomePage/>
    },
    {
      path: "/client-homepage", // Route for Client Home
      element: <ClientHomePage/>
    }
  ]);

  return (
    <>
      <RouterProvider router={router}>
        <RedirectBasedOnUserType />
      </RouterProvider>
    </>
  );
}

export default App;
