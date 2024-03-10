import React from 'react';
// icon
import {BsArrowUpRight} from "react-icons/bs";
// motion
import {motion} from "framer-motion";
// variants
import {fadeIn} from "../variants";

// services data
const services = [
    {
        name: 'Platform Engineer',
        description:
            'Transforming airports into seamless, tech-driven hubs. Pioneering in a mission-critical environment. Pushing technology boundaries at Enabling Technologies!',
        link: 'Learn more',
        href: 'https://careers.schipholgroup.com/',
    },
    {
        name: 'Application Consultant',
        description:
            'Development and maintenance of a web portal using eHerkenning for companies to submit, consult, or modify their data, such asinsurance for employees working abroad.',
        link: 'Learn more',
        href: 'https://werkenbijdesvb.nl/',
    },
    {
        name: 'D&D 5e DM Toolkit Developer',
        description:
            'Implementation, development, styling and formatting of website, writing and developing algorithms, testing, bug fixes. Process user stories. CI/CD.',
        link: 'Go To',
        href: 'https://dndnext.onrender.com/',
    },
    {
        name: 'Game Developer',
        description:
            'Reconstructing a once popular gaming app in Python. Flappybird with a graphic design based on DOOM. Programming a py.script and building an executable.' ,
        link: 'Visit repo',
        href: 'https://github.com/Drystan-Furor/FlappyBirdGame',
    },
]

const Services = () => {
    return (
        <section id='services' className='section h-screen mb-[300px]'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row'>
                    {/*text & img*/}
                    <motion.div
                        variants={fadeIn('left', 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once: false, amount: 0.3}}
                        className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0 mr-3'>
                        <h2 className='h2 text-accent mb-6'>What I Do</h2>
                        <h3 className='h3 max-w-[455px] mb-16'>
                            Tristan has contributed to the development,implementation, and maintenance of web
                            applications and customer portals, including migration projects and the modernization of
                            outdated technologies.
                        </h3>
                        <button className='btn btn-sm'>
                            <a href='#work'>
                                See my work
                            </a>
                        </button>
                    </motion.div>
                    {/*    services*/}
                    <motion.div
                        variants={fadeIn('right', 0.5)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once: false, amount: 0.3}}
                        className='flex-1'>
                        {/*   services list*/}
                        <div>
                            {services.map((service, index) => {
                                //destructure service
                                const {name, description, link, href} = service;
                                return (
                                    <div key={index} className='border-b border-white/20 h-[146px] text-sm md:text-base lg:text-xl mb-[25px] flex text-wrap'>
                                        <div className='max-w-[476px]'>
                                            <h4 className='h2 text-[20px] tracking-wilder mb-6 anta-regular text-yellow-300 '>
                                                {name}
                                            </h4>
                                            <p className='font-secondary leading-tight mb-12'>
                                                {description}
                                            </p>
                                        </div>
                                        <div className='flex flex-col flex-1 items-end'>
                                            <a href={href}
                                               className='btn w-9 h-9 mb-[4spx] flex justify-center items-center'>
                                                <BsArrowUpRight/>
                                            </a>
                                            <a href='#' className='text-gradient text-sm'>
                                                {link}
                                            </a>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Services;
