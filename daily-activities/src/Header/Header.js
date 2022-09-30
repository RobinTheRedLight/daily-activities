import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className="image">
                <img src="iconDA.png" alt="" />
            </div>
            <div className="text">
                <h1>Daily Activities</h1>
            </div>
        </div>
    );
};

export default Header;