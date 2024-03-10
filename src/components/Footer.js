import React from 'react';
// import icons
import {BiHomeAlt, BiUser} from 'react-icons/bi';
import {BsClipboardData, BsBriefcase, BsChatSquare} from 'react-icons/bs';
// link

import {Link} from 'react-scroll';

// img
import Logo from '../assets/not-logo.svg';
import ArtsIct from '../assets/services.png';

const Footer = () => {
    return (
        <footer className='bottom-2 lg:bottom-8 w-full overflow-hidden z-50 text-wrap text-pretty'>
            <section id='footer'
                className="max-w-4xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between"
            >
                <address>
                    <h2>Tristan Arts</h2>
                    Email: <a href="mailto:artstristan@gmail.com">TristanArts@icloud.com</a
                ><br/>
                    Phone: <a href="tel:+331624770098">(+31) 6 24770098</a>
                </address>
                <nav className="hidden md:flex flex-col gap-2" aria-label="footer">
                    <a href="#home" className="hover:opacity-80">Home</a>
                    <a href="#about" className="hover:opacity-80">About</a>
                    <a href="#services" className="hover:opacity-80">Services</a>
                    <a href="#contact" className="hover:opacity-80">Contact</a>
                </nav>
                <div className="flex flex-col sm:gap-2">
                    <p className="text-right text-nowrap">
                        &copy; <span id="year">2024</span> Arts ICT | All rights reserved
                    </p>
                    <p className="text-right"></p>
                </div>
                {/*Arts ICT */}
                <img className='mx-auto mx-3 mt-10' src={ArtsIct} alt='Arts ict'/>
            </section>
            <p className="p-4 flex flex-col text-right text-xs">
                Arts ICT, Tristan Arts, and their respective logos, products, and services are trademarks of Tristan
                Arts in the Netherlands and other countries. All other trademarks are the property
                of their respective owners.
            </p>
        </footer>
    )
};

export default Footer;
