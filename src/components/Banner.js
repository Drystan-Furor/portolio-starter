import React from 'react';
// images
import Image from '../assets/hero-portrait.png';
import ArtsIct from '../assets/services.png';
// icons
import {FaDiceD20, FaGithub, FaLinkedin, FaDownload} from "react-icons/fa";
import {SiFreelancer} from "react-icons/si";
// type animation
import {TypeAnimation} from "react-type-animation";
// motion
import {motion} from "framer-motion";
// variants
import {fadeIn} from "../variants";


const handleDownload = () => {
    // Assuming the cv.pdf is placed in the public/assets folder
    const link = document.createElement('a');
    link.href = '/cv.pdf'; // Set the download path relative to the public directory
    link.download = 'cv.pdf'; // The filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};


const Banner = () => {
    return (
        <section className='min-h-[85wh] lg:min-h-[78wh] flex items-center h-screen mb-[300px] mt-16'>
            <div className='container mx-auto'>
                <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
                    {/*    text */}
                    <div className='flex-1 text-center font-secondary lg:text-left'>
                        <motion.h1
                            variants={fadeIn('up', 0.3)} initial="hidden"
                            whileInView={'show'} viewport={{once: false, amount: 0.7}}
                            className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
                            TRISTAN <span className='text-gradient'>ARTS</span>
                        </motion.h1>
                        <motion.div
                            variants={fadeIn('up', 0.4)} initial="hidden"
                            whileInView={'show'} viewport={{once: false, amount: 0.7}}
                            className='mb-6 text-[36px] lg:text-[6opx] font-secondary font-semibold uppercase leading-[1]'>
                            <span className='text-white mr-4 pb-16'>I am <br/>a</span>
                            <TypeAnimation
                                sequence={['Developer', 2000, 'Copywriter', 2000, 'Freelancer', 2000,]}
                                speed={50}
                                className='text-accent'
                                wrapper='span'
                                repeat={Infinity}
                            />
                        </motion.div>
                        <motion.p
                            variants={fadeIn('up', 0.5)} initial="hidden"
                            whileInView={'show'} viewport={{once: false, amount: 0.7}}
                            className='mb-16 max-w-lg mx-auto lg:mx-0 mb-16'>
                            Tristan Arts is a Software Engineer and Java Developer with a passion for sharp algorithmic
                            work, bringing inspiration into projects that blend beauty and functionality. He is proud of
                            his
                            ability to learn and apply new knowledge and skills, continuously striving for growth and
                            development. Tristan's journey into software engineering began when he decided to pursue his
                            passion beyond his initial work as a forklift operator in logistics. He embraced the
                            challenges
                            of development, dedicating countless hours to study, practice, and collaboration on small
                            projects with other programmers.
                        </motion.p>
                        <motion.div
                            variants={fadeIn('up', 0.6)} initial="hidden"
                            whileInView={'show'} viewport={{once: false, amount: 0.7}}
                            className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
                            <button className='btn btn-lg'>
                                <a href='#contact'>
                                    Contact me
                                </a>
                            </button>
                            <button
                                onClick={handleDownload}
                                className="hover:text-accent font-bold py-2 px-4 rounded inline-flex items-center">
                                <span className='mr-3 text-gradient btn-link'>Download CV </span>
                                <FaDownload/>
                            </button>
                        </motion.div>
                        {/*    socials*/}
                        <motion.div
                            variants={fadeIn('up', 0.7)} initial="hidden"
                            whileInView={'show'} viewport={{once: false, amount: 0.7}}
                            className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
                            <a href='https://www.linkedin.com/in/tristan-arts/'>
                                <section className="flex justify-center items-center">
                                    <button
                                        className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#0077b5] from-gray-800 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]">
                                        <FaLinkedin/>
                                        <span
                                            className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gradient group-hover:text-sm group-hover:-translate-y-10 duration-700"
                                        >Linkedin</span>
                                    </button>
                                </section>
                            </a>
                            <a href='https://github.com/Drystan-Furor'>
                                <section className="flex justify-center items-center">
                                    <button
                                        className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]">
                                        <FaGithub/>
                                        <span
                                            class="absolute opacity-0 group-hover:opacity-100 group-hover:text-gradient group-hover:text-sm group-hover:-translate-y-10 duration-700">GitHub</span>
                                    </button>
                                </section>
                            </a>
                            <a href='https://nl.prolinker.com/freelancers/tristan-9RPQNL6?nocache=1'>
                                <section className="flex justify-center items-center">
                                    <button
                                        className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-yellow-600 to-amber-800 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]">
                                        <SiFreelancer/>
                                        <span
                                            className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gradient group-hover:text-sm group-hover:-translate-y-10 duration-700">Freelancer</span>
                                    </button>
                                </section>
                            </a>
                            <a href='https://dndnext.onrender.com/'>
                                <section className="flex justify-center items-center">
                                    <button
                                        className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-red-500 to-orange-400 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]">
                                        <FaDiceD20/>
                                        <span
                                            className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gradient group-hover:text-sm group-hover:-translate-y-10 duration-700">DM Toolkit</span>
                                    </button>
                                </section>
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
            <div className='h-[140px]'></div>
        </section>);
};

export default Banner;
