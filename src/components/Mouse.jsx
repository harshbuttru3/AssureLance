import React, { useRef, useEffect } from 'react';
import './mouse.css'; // Ensure this file contains the required styles
import gsap from 'gsap';

function Mouse() {
    const mouseShadowRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (event) => {
            gsap.to(mouseShadowRef.current, {
                x: event.clientX,
                y: event.clientY,
                ease: "back.out",
            });
        };

        const handleMouseEnter = (event) => {
            const targetClass = event.target.classList.contains('navopt') ? 'navopt' : 'page2';
            const scale = targetClass === 'navopt' ? 3 : 3; // Adjust scale if different for different elements
            const backgroundColor = targetClass === 'navopt' ? '#fdfffc56' : 'rgba(255, 255, 0, 0.7)';

            gsap.to(mouseShadowRef.current, {
                scale,
                border: "1px",
                backgroundColor,
            });
        };

        const handleMouseLeave = () => {
            gsap.to(mouseShadowRef.current, {
                scale: 1,
                backgroundColor: "#fdfffc",
                border: "none",
            });
        };

        const scalemouse = document.querySelector(".navopt");
        const scalemousefooter = document.querySelector(".page2");

        // Add event listeners
        if (scalemouse) {
            scalemouse.addEventListener("mouseenter", handleMouseEnter);
            scalemouse.addEventListener("mouseleave", handleMouseLeave);
        }

        if (scalemousefooter) {
            scalemousefooter.addEventListener("mouseenter", handleMouseEnter);
            scalemousefooter.addEventListener("mouseleave", handleMouseLeave);
        }

        document.addEventListener('mousemove', handleMouseMove);

        // Cleanup the event listeners on component unmount
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);

            if (scalemouse) {
                scalemouse.removeEventListener("mouseenter", handleMouseEnter);
                scalemouse.removeEventListener("mouseleave", handleMouseLeave);
            }

            if (scalemousefooter) {
                scalemousefooter.removeEventListener("mouseenter", handleMouseEnter);
                scalemousefooter.removeEventListener("mouseleave", handleMouseLeave);
            }
        };
    }, []);

    return (
        <div id="mouseshadow" ref={mouseShadowRef}></div>
    );
}

export default Mouse;
