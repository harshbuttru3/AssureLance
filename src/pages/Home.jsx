import React, { useEffect } from 'react';
import gsap from 'gsap';
import Mouse from '../components/Mouse';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageA from '../components/PageA';
import "./home.css";

function Home() {

  return (
    <>
      <Mouse />
      <Navbar />
      <PageA />
      <Footer />
    </>
  );
}

export default Home;
