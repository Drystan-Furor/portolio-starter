import React from 'react';
// motion
import {motion} from "framer-motion";
// variants
import {fadeIn} from "../variants";

// Handler to open email client
const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    const mailtoLink = `mailto:tristanarts@icloud.com?subject=Contact from ${name}&body=Message: ${message}%0D%0AFrom: ${name} (${email})`;
    window.location.href = mailtoLink;
};

const Contact = () => {
    return (
        <section id='contact' className='py-16 section h-screen mb-[300px]'>
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
                            <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking wide'>
                                Get in touch
                            </h4>
                            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                                Let's work <br/> together!
                            </h2>
                            <div>
                                <a href="tel:+31624770098">
                                    <button className='btn btn-lg'>
                                        Call Me
                                    </button>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                    {/* form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        variants={fadeIn('left', 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once: false, amount: 0.3}}
                        className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
                        <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white
                        focus:border-accent transition-all'
                               type='text'
                               placeholder='Your name'
                        />
                        <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white
                        focus:border-accent transition-all'
                               type='text'
                               placeholder='Your e-mail'
                        />
                        <textarea className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white
                        focus:border-accent transition-all resize-none mb-12'
                                  placeholder='Your message'>
                        </textarea>
                        <button className='btn btn-lg'>Send message</button>
                    </motion.form>
                </div>
            </div>
            <div className='h-[140px]'></div>
        </section>
    );
};

export default Contact;
