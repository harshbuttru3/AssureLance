import React from 'react';
import Navbar from './components/Navbar'; 
import { createBrowserRouter } from 'react-router-dom';

//components


//pages
import Home from './pages/Home';
import Login from './pages/Login';
import 



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
    {},
    {},

  ])

  
}

export default App;

