import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import "./Header.css";

const Header = () => {
    const icon = <FontAwesomeIcon icon={faSearch} />
    return (
        <div>
            <div className='navbar'>
            <nav>
                <a href="">Home</a>
                <a href="">About Us</a>
                <a href="">Connect</a>
                <input type="text" /><button>{icon}</button>
            </nav>
            </div>
            <div className='header'>
                <h1>Welcome to Billionaire Club</h1>
                <p>These respective peoples are the top billionaires. Select the ones you want in your club.</p>
                <h2>Required Net Worth: 100 Billion</h2>
            </div>
        </div>
    );
};

export default Header;