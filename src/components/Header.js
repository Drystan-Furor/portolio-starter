import React from 'react';
// images
import Logo from '../assets/not-logo.svg';

const Header = () => {
    return <header id='home' className='py-8 '>
        <div className='container mx-auto'>
            <div className='flex justify-between items-center'>
            {/* LOGO */}
                <a href='#'>
                    <img src={Logo} alt="Logo"/>
                </a>
            {/* button */}
                <button className='btn btn-sm'>Work with me</button>
            </div>
        </div>
    </header>;
};

export default Header;
