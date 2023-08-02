import React, { useState, useEffect } from 'react';

const ScrollRevealComponent = ({children}) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const revealHeight = 300;
        setIsVisible(scrollPosition > revealHeight);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div style={{ display: isVisible ? 'block' : 'none',}}>
            {children}
        </div>
    );
};

export default ScrollRevealComponent;
