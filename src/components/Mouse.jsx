import React, { useRef, useEffect } from 'react';
import './mouse.css';
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

        const scalemouse = document.querySelector("#navopt");

        const handleMouseEnter = () => {
            gsap.to(mouseShadowRef.current, {
                scale: 3,
                border: "1px solid #ffffffab",
                backgroundColor: "#fdfffc56",
            });
        };

        const handleMouseLeave = () => {
            gsap.to(mouseShadowRef.current, {
                scale: 1,
                backgroundColor: "#fdfffc",
                border: "none",
            });
        };

    // Add event listeners
        scalemouse.addEventListener("mouseenter", handleMouseEnter);
        scalemouse.addEventListener("mouseleave", handleMouseLeave);

        document.addEventListener('mousemove', handleMouseMove);


        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            scalemouse.removeEventListener("mouseenter", handleMouseEnter);
            scalemouse.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <div id="mouseshadow" ref={mouseShadowRef}></div>
    );
}

export default Mouse;
