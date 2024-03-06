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
        name: 'Lorem Ipsum',
        description:
            'felis epicurei nominavi referrentur nisl hendrerit graecis diam fermentum congue viris habitasse definitionem potenti errem dicta sea no sonet mattis',
        link: 'Learn more',
    },
    {
        name: 'Dolor Sit',
        description:
            'felis epicurei nominavi referrentur nisl hendrerit graecis diam fermentum congue viris habitasse definitionem potenti errem dicta sea no sonet mattis',
        link: 'Learn more',
    },
    {
        name: 'Nominavi referrentur',
        description:
            'felis epicurei nominavi referrentur nisl hendrerit graecis diam fermentum congue viris habitasse definitionem potenti errem dicta sea no sonet mattis',
        link: 'Learn more',
    },
    {
        name: 'Viris habitasse',
        description:
            'felis epicurei nominavi referrentur nisl hendrerit graecis diam fermentum congue viris habitasse definitionem potenti errem dicta sea no sonet mattis',
        link: 'Learn more',
    },
]

const Services = () => {
    return (
        <section id='services' className='section'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row'>
                    {/*text & img*/}
                    <motion.div
                        variants={fadeIn('left', 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once: false, amount: 0.3}}
                        className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
                        <h2 className='h2 text-accent mb-6'>What I Do</h2>
                        <h3 className='h3 max-w-[455px] mb-16'>Accusata veritus legimus omnesque utamur class aliquid
                            salutatus iusto porro</h3>
                        <button className='btn btn-sm'>See my work</button>
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
                                    const {name, description, link} = service;
                                    return (
                                        <div key={index} className='border-b border-white/20 h-[146px] mb-[30px] flex'>
                                            <div className='max-w-[476px]'>
                                                <h4 className='text-[20px] tracking-wilder font-primary font-semibold mb-6'>
                                                    {name}
                                                </h4>
                                                <p className='font-secondary leading-tight'>
                                                    {description}
                                                </p>
                                            </div>
                                            <div className='flex flex-col flex-1 items-end'>
                                                <a href='#' className='btn w-9 h-9 mb-[4spx] flex justify-center items-center'>
                                                    <BsArrowUpRight />
                                                </a>
                                                <a href='#' className='text-gradient text-sm'>
                                                    {link}
                                                </a>

                                            </div>
                                        </div>
                                    );
                                }
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Services;
