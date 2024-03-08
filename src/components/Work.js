import React from 'react';
// motion
import {motion} from "framer-motion";
//variants
import {fadeIn} from "../variants";
// img
import Img1 from '../assets/portfolio-img1.png'
import Img2 from '../assets/portfolio-img2.png'
import Img3 from '../assets/portfolio-img3.png'


const Work = () => {
    return (
        <section id='work' className='section'>
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
                                Sollicitudin errem venenatis ad autem sapientem hinc esse nullam tincidunt eum feugait
                                neque duis inceptos eloquentiam noluisse tacimates alterum noster adversarium scripta
                                viris quaeque sit venenatis natoque tota numquam ubique
                            </p>
                            <button className='btn btn-sm'>View all projects</button>
                        </div>
                        {/* image */}
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
                                  UI/UX Design
                                </span>
                            </div>
                            {/* title*/}
                            <div
                                className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                                <span className='text-3xl text-white'>Project Title</span>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadeIn('up', 0.3)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.7}}
                        className='flex-1 flex flex-col gap-y-10 lg:mt-[130px]'>
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
                                  UI/UX Design
                                </span>
                            </div>
                            {/* title*/}
                            <div
                                className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                                <span className='text-3xl text-white'>Project Title</span>
                            </div>
                        </div>
                        {/* image */}
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
                                  UI/UX Design
                                </span>
                            </div>
                            {/* title*/}
                            <div
                                className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                                <span className='text-3xl text-white'>
                                    Project Title
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Work;
