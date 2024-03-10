import React from 'react';
// motion
import {motion} from "framer-motion";
// variants
import {fadeIn} from "../variants";


const Testimonials = () => {
    return (
        <section id='testimonials'
                 className='section'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row'>
                    {/* text */}
                    <motion.div
                        variants={fadeIn('right', 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once: false, amount: 0.3}}
                        className='flex-1 flex justify-start tems-center'>
                        <div className='mb-6'>
                            <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking wide mt-16'>
                                Testimonials
                            </h4>
                            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                                What people think of <br/> <span className='text-accent'>Arts ICT!</span>
                            </h2>
                        </div>
                    </motion.div>
                    {/* form */}
                    <motion.div
                        variants={fadeIn('left', 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once: false, amount: 0.3}}
                        className='flex-1 rounded-2xl flex flex-col lg:flex-row gap-y-6 items-start'>
                        <div className="container mx-auto px-6 py-20">
                            <h2 className="text-4xl font-bold text-center mb-8 text-gradient">
                                Testimonials
                            </h2>
                            <div className="flex flex-col md:flex-col w-full">
                                <div className="w-full px-2 mb-4">
                                    <div className="bg-slate-200 rounded shadow py-2">
                                        <p className="text-accent text-base px-6 mb-5">
                                            "Working with Arts ICT transformed our digital presence. Tristan's
                                            innovative approach and meticulous attention to detail have
                                            not only enhanced the functionality of our website but also significantly
                                            improved user engagement. Tristan's passion for technology and commitment to
                                            excellence are evident in every project they undertake. Partnering with Arts
                                            ICT has been one of the best decisions we've made, and we look forward to
                                            continuing this fruitful collaboration."
                                        </p>
                                        <p className="text-center">
                                            <div className="mx-auto text-center">⭐⭐⭐⭐⭐</div>
                                            <span className="text-gradient text-xs md:text-sm px-6">SherLobke</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full px-2 mb-4">
                                    <div className="bg-slate-200 rounded shadow py-2">
                                        <p className="text-accent text-base px-6 mb-5">
                                            Beyond his academic prowess, Tristan's passion for learning is truly
                                            commendable. He possesses a rare combination of knowledge, practical skills,
                                            and a genuine curiosity that drives him to delve deeper into subjects and
                                            explore them from various angles. His innovative mindset, coupled with his
                                            ability to think critically,
                                            positions him as a valuable asset in any team or project.
                                        </p>
                                        <p className="text-accent text-base px-6 mb-5">
                                            Furthermore, Tristan's interpersonal skills are exemplary. He collaborates
                                            well with peers and contributes meaningfully to projects. His positive
                                            attitude, combined with his ability to motivate
                                            and inspire those around him, makes him a pleasure to work with.
                                        </p>
                                        <p className="text-center">
                                            <div className="mx-auto text-center">⭐⭐⭐⭐⭐</div>
                                            <span
                                                className="text-gradient text-xs md:text-sm px-6">Dr. Mohsen Kakavand</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full px-2 mb-4">
                                    <div className="bg-slate-200 rounded shadow py-2">
                                        <p className="text-accent text-base px-6 mb-5">
                                            "I was thoroughly impressed by the professionalism and expertise
                                            demonstrated by Tristan Arts at Arts ICT. From our initial consultation to
                                            the final delivery of our project, Tristan provided exceptional
                                            service and innovative solutions that exceeded our expectations. His
                                            dedication to understanding our needs and translating them into actionable
                                            strategies has played a pivotal role in our project's success. Arts ICT is
                                            truly a partner you can rely on for outstanding results."
                                        </p>
                                        <p className="text-center">
                                            <div className="mx-auto text-center">⭐⭐⭐⭐⭐</div>
                                            <span className="text-gradient text-xs md:text-sm px-6">SMT ICT</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className='h-[140px]'></div>
        </section>
    );
};

export default Testimonials;
