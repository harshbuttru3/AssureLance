import React, { useEffect } from 'react';
import gsap from 'gsap';
import Mouse from '../components/Mouse';
import Navbar from '../components/Navbar';
import "./home.css";

function Home() {
  // Use useEffect to handle the animation as a side effect
  useEffect(() => {
    gsap.to("#circle", {
      x: 1150,
      y: -220,
    });
  }, []); // Empty dependency array means this runs only once after the initial render

  return (
    <>
      <Mouse />
      <Navbar />
      <div id='circle'></div>
    </>
  );
}

export default Home;
