
import React from 'react';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='bg-dark text-light pt-3 pb-3 mt-3  text-center'>
            <p><small>Copyright &copy; {year}</small></p>
            <p><small>Develop By Dipankar Halder</small></p>
        </footer>
    );
};

export default Footer;