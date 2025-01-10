import React, { forwardRef } from 'react';
import './Header.css';
import header from '../../assets/images/header.svg';
import Info from '../Info/Info';

const Header = forwardRef(({ socialLinks }, ref) => {
    return (
        <header ref={ref} className='header'>
            <div className='container'>
                <Info socialLinks={socialLinks} />
                <img src={header} className='header-image' alt="header" />
            </div>
        </header>
    );
});

export default Header;
