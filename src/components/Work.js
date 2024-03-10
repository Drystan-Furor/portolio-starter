import React from 'react';
// motion
import {motion} from "framer-motion";
//variants
import {fadeIn} from "../variants";
// img
import Img1 from '../assets/portfolio-img1.png'
import Img2 from '../assets/portfolio-img2.png'
import Img3 from '../assets/projects_arts_ict.webp'


const Work = () => {
    return (
        <section id='work' className='section h-screen'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row gap-x-10'>
                    <motion.div
                        variants={fadeIn('down', 0.3)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.3}}
                        className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
                        {/*    text */}
                        <div>
                            <h2 className='h2 leading-tight text-accent'>
                                My latest <br/> work.
                            </h2>
                            <p className='max-w-sm mb-16'>
                                Tristan's commitment to personal and professional development is evident in his
                                proactive approach to learning and applying his skills in practical projects,
                                continuously seeking out challenges and opportunities for growth.
                            </p>
                            <a href='https://github.com/Drystan-Furor'>

                                <button className='btn btn-sm'>View all projects</button>
                            </a>
                        </div>
                        {/* image */}
                        <a href='https://drystan-furor.github.io/java-development-path/'>
                            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                                {/*overlay*/}
                                <div
                                    className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>
                                </div>
                                {/* img */}

                                <img className='group-hover:scale-125 transition-all duration-500'
                                     src={Img1} alt='project 1'/>
                                {/* pre title*/}
                                <div
                                    className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                                <span className='text-gradient'>
                                  Becoming a Java Developer
                                </span>
                                </div>
                                {/* title*/}
                                <div
                                    className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                                    <span className='text-3xl text-white'>Documentation</span>
                                </div>
                            </div>
                        </a>
                    </motion.div>
                    <motion.div
                        variants={fadeIn('up', 0.3)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.7}}
                        className='flex-1 flex flex-col gap-y-10 lg:h-screen'>
                        {/* image */}
                        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                            {/*overlay*/}
                            <div
                                className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>
                            </div>
                            {/* img */}
                            <img className='group-hover:scale-125 transition-all duration-500'
                                 src={Img2} alt='project 1'/>
                            {/* pre title*/}
                            <div
                                className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                                <span className='text-gradient'>
                                  CEO and Founder
                                </span>
                            </div>
                            {/* title*/}
                            <div
                                className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                                <span className='text-3xl text-white'>Freelancer</span>
                            </div>
                        </div>
                        {/* image */}
                        <a href='https://drystan-furor.github.io/Portfolio/'>
                            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                                {/*overlay*/}
                                <div
                                    className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>
                                </div>
                                {/* img */}
                                <img className='group-hover:scale-125 transition-all duration-500'
                                     src={Img3} alt='project 1'/>
                                {/* pre title*/}
                                <div
                                    className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                                <span className='text-gradient'>
                                  Innovation & Creativity
                                </span>
                                </div>
                                {/* title*/}
                                <div
                                    className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                                <span className='text-3xl text-white'>
                                    Impactfull Service
                                </span>
                                </div>
                            </div>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Work;
