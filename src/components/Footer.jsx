import React, { useEffect } from 'react';
import './footer.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  useEffect(() => {
    const handleWheel = (dets) => {
      if (dets.deltaY > 0) {
        gsap.to('.moving', {
          x: '-200%',
          duration: 3,
          ease: 'none',
          repeat: -1,
        });

        gsap.to('.moving i', {
          rotate: 180,
        });
      } else {
        gsap.to('.moving', {
          x: '0%',
          duration: 3,
          ease: 'none',
          repeat: -1,
        });

        gsap.to('.moving i', {
          rotate: 0,
        });
      }
    };

    window.addEventListener('wheel', handleWheel);

    gsap.from('.company', {
      y: -100,
      duration: 4,
      delay: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: '.company',
        scroller: 'body',
        start: 'top 50%',
        end: 'top 50%',
        scrub: 2,
        markers: true,
      },
    });

    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <div className="Footer">
      <div className="page2">
        <footer id="move">
          {Array.from({ length: 12 }).map((_, index) => (
            <div className="moving" key={index}>
              <h1>infomania</h1>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          ))}
        </footer>
        <footer id="infomania">
          <div className="company">
            <h2>Company</h2>
            <hr />
            <h3>Privacy Policy</h3>
            <h3>Our Services</h3>
            <h3>About us</h3>
          </div>
          <div className="company">
            <h2>Get help</h2>
            <hr />
            <h3>Term & Conditions</h3>
            <h3>Payment option</h3>
            <h3>FAQ</h3>
          </div>
          <div className="company">
            <h2>Step out</h2>
            <hr />
            <h3>Cancellation</h3>
            <h3>Refund</h3>
            <h3>Help</h3>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;

