import React from 'react';
import notFound from '../../../../Images/not found.jpg';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='container  style-not-found'>
            <img src={notFound} alt="" />
        </div>
    );
};

export default NotFound;