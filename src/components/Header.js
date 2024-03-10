import React from 'react';
// images
import Logo from '../assets/not-logo.svg';
import ArtsIct from "../assets/services.png";


const Header = () => {
    return <header id='home' className='py-8 mb-16'>
        <div className='container mx-auto'>
            <div className='flex justify-between items-center'>
                {/* LOGO */}
                <a href='#footer'>
                    <img src={Logo} alt="Logo"/>
                </a>
                {/*Arts ICT */}
                <img className='mx-auto mx-3 hidden md:block' src={ArtsIct} alt='Arts ict'/>
                {/* button */}
                <button className='btn btn-sm'>
                    <a href='#testimonials'>
                        Work with me
                    </a>
                </button>
            </div>
        </div>
    </header>;
};

export default Header;
