import React, { useState, useEffect } from 'react';
import './style.css';
import { MdArrowUpward } from 'react-icons/md'

const Arrow = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}>
            <MdArrowUpward className='arrow-item' onClick={scrollToTop} />
        </div>
    );
};

export default Arrow;
