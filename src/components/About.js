import React from 'react';
// countup
import CountUp from "react-countup";
// intersection observer hook
import {useInView} from "react-intersection-observer";
//motion
import {motion} from "framer-motion";
// variant
import {fadeIn} from "../variants";


const About = () => {
    const {ref, inView} = useInView({
        threshold: 0.5,
        triggerOnce: false,
    });

    return (
        <section id='about' className='section mb-16 h-screen mb-[500px]' ref={ref}>
            <div className='container mx-auto'>
                <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
                    {/*    img */}
                    <motion.div
                        variants={fadeIn('right', 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once: false, amount: 0.3}}
                        className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>
                    </motion.div>
                    {/*text*/}
                    <motion.div
                        variants={fadeIn('left', 0.5)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once: false, amount: 0.3}}
                        className='flex-1'>
                        <h2 className='h2 text-accent'>About me.</h2>
                        <h3 className='h3 mb-4 atomic-age-regular'>"I'm a Freelance back-end Java developer with almost 5 years of
                            experience"</h3>
                        <p className='mb-6'>
                            Driven by the questions: What do I really like to do? What gives me energy? What
                            am I good at? He decided to become a Software Engineer in 2020. In 2022 he started as a
                            Java Developer, by 2024 he became a Platform Engineer.
                        </p>
                        <p className='mb-6'>
                            Tristan is described as friendly, clear, and experienced in leadership.
                            He quickly becomes a valuable team member, showcasing his talent and dedication by excelling
                            in his role, working independently, learning new skills with ease, and expanding his
                            knowledge in the field. He maintains balance in his work through the use of SCRUM
                            methodologies.
                        </p>
                        {/*    stats*/}
                        {inView && (
                            <div className=' flex gap-v-6 lg:gap-x-10 mb-12'>

                                <div>
                                    <div className='text-[40px] font-tertiary text-gradient mb-2 pt-3'>
                                        <CountUp start={0} end={4} duration={3}/>+
                                    </div>
                                    <div className='font-primary text-sm tracking-[2px]'>
                                        Years of <br/>
                                        Experience
                                    </div>
                                </div>

                                <div>
                                    <div className='text-[40px] font-tertiary text-gradient mb-2 pt-3'>
                                        <CountUp start={0} end={47} duration={4}/>+
                                    </div>
                                    <div className='font-primary text-sm tracking-[2px]'>
                                        Projects <br/>
                                        Completed
                                    </div>
                                </div>
                                <div>
                                    <div className='text-[40px] font-tertiary text-gradient mb-2 pt-3'>
                                        <CountUp start={0} end={42} duration={3}/>+
                                    </div>
                                    <div className='font-primary text-sm tracking-[2px]'>
                                        Happy <br/>
                                        Clients
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className='flex gap-x-8 items-center '>
                            <button className='btn btn-lg'>
                                <a href='#contact'>
                                    Contact me
                                </a>
                            </button>
                            <a href='#services' className='text-gradient btn-link'>
                                My Portfolio
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
