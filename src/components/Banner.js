import React from 'react';
// images
import Image from '../assets/hero-portrait.png';
// icons
import {FaDiceD20, FaGithub, FaLinkedin} from "react-icons/fa";
// type animation
import {TypeAnimation} from "react-type-animation";
// motion
import {motion} from "framer-motion";
// variants
import {fadeIn} from "../variants";

const Banner = () => {
    return (<section className='min-h-[85wh] lg:min-h-[78wh] flex items-center h-screen'>
        <div className='container mx-auto'>
            <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
                {/*    text */}
                <div className='flex-1 text-center font-secondary lg:text-left'>
                    <motion.h1
                        variants={fadeIn('up', 0.3)} initial="hidden"
                        whileInView={'show'} viewport={{once: false, amount: 0.7}}
                        className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
                        TRISTAN <span>ARTS</span>
                    </motion.h1>
                    <motion.div
                        variants={fadeIn('up', 0.4)} initial="hidden"
                        whileInView={'show'} viewport={{once: false, amount: 0.7}}
                        className='mb-6 text-[36px] lg:text-[6opx] font-secondary font-semibold uppercase leading-[1]'>
                        <span className='text-white mr-4'>I am a</span>
                        <TypeAnimation
                            sequence={['Software Engineer', 2000, 'Java Developer', 2000, 'Copywriter', 2000, 'Freelancer', 2000,]}
                            speed={50}
                            className='text-accent'
                            wrapper='span'
                            repeat={Infinity}
                        />
                    </motion.div>
                    <motion.p
                        variants={fadeIn('up', 0.5)} initial="hidden"
                        whileInView={'show'} viewport={{once: false, amount: 0.7}}
                        className='mb-8 max-w-lg mx-auto lg:mx-0'>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                        accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                        sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                        sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                        aliquyam erat, sed diam voluptua.
                    </motion.p>
                    <motion.div
                        variants={fadeIn('up', 0.6)} initial="hidden"
                        whileInView={'show'} viewport={{once: false, amount: 0.7}}
                        className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
                        <button className='btn btn-lg'>Contact me</button>
                        <a href='#' className='text-gradient btn-link'>
                            My Portfolio
                        </a>
                    </motion.div>
                    {/*    socials*/}
                    <motion.div
                        variants={fadeIn('up', 0.7)} initial="hidden"
                        whileInView={'show'} viewport={{once: false, amount: 0.7}}
                        className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
                        <a href='#'>
                            <FaLinkedin/>
                        </a>
                        <a href='#'>
                            <FaGithub/>
                        </a>
                        <a href='#'>
                            <FaDiceD20/>
                        </a>
                    </motion.div>
                </div>
                {/*    image */}
                <motion.div
                    variants={fadeIn('down', 0.5)}
                    initial="hidden"
                    whileInView={'show'}
                    className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
                    <img src={Image} alt='Hero'/>
                </motion.div>
            </div>

        </div>
    </section>);
};

export default Banner;
