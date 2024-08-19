import React, { useRef, useEffect } from 'react';
import './mouse.css';
import gsap from 'gsap';

function Mouse() {
    const mouseShadowRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (event) => {
            gsap.to(mouseShadowRef.current, {
                x: event.clientX - 100,
                y: event.clientY - 100,
                ease: "back.out",
            });
        };

        document.addEventListener('mousemove', handleMouseMove);

        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div id="mouseshadow" ref={mouseShadowRef}></div>
    );
}

export default Mouse;
