import React, { useEffect } from 'react';
import gsap from 'gsap';
import Mouse from '../components/Mouse';
import Navbar from '../components/Navbar';
import "./home.css";

function Home() {

  return (
    <>
      <Mouse />
      <Navbar />
    </>
  );
}

export default Home;
