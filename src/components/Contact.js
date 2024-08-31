import React, {useRef} from 'react';
// motion
import {motion} from "framer-motion";
// variants
import {fadeIn} from "../variants";
// Import emailjs
import emailjs from '@emailjs/browser';
// icons
import {FiPhoneCall} from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
    const form = useRef();
    const btn = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        if (btn.current) btn.current.value = 'Sending...';

        const serviceID = 'service_6w5bvdh';
        const templateID = 'template_epp41tf';
        const userID = 'h7xiNrW-pTzv7e_3G';

        emailjs.sendForm(serviceID, templateID, form.current, userID)
            .then(() => {
                if (btn.current) btn.current.value = 'Send message';
                alert('Thank you for your message, Arts ICT will reply as soon as possible.');
            }, (err) => {
                if (btn.current) btn.current.value = 'Send message';
                alert(JSON.stringify(err));
            });
    };

    return (
        <section id='contact' className='py-16 lg:section h-screen'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row'>
                    {/* text */}
                    <motion.div
                        variants={fadeIn('right', 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once: false, amount: 0.3}}
                        className='flex-1 flex justify-start items-center mb-10'>
                        <div>
                            <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>
                                Get in touch
                            </h4>
                            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                                Let's work together!
                            </h2>
                            <div className='flex flex-col items-center'>
                                Phone:
                                <button className='btn btn-lg m-3 mb-10'>
                                    <a href="tel:+31624770098">
                                        <FiPhoneCall/>
                                    </a>
                                </button>
                                E-mail:
                                <button className='btn btn-lg m-3'>
                                     <a href="mailto:artstristan@gmail.com">
                                         <MdOutlineEmail />
                                     </a>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                    {/* form */}
                    <motion.form
                        ref={form} onSubmit={sendEmail} id="form"
                        variants={fadeIn('left', 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once: false, amount: 0.3}}
                        className='flex-1 form-container border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
                        <input className='hidden' type="text" name="to_name" id="to_name" value="Arts ICT"/>
                        <input
                            className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
                            type='text'
                            name='from_name'
                            id="from_name"
                            placeholder='Your name'
                            required
                        />
                        <input
                            className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
                            type='email'
                            name="reply_to"
                            id="reply_to"
                            placeholder='Your e-mail'
                            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                            title="Please enter a valid email address."
                            required
                        />
                        <textarea
                            className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
                            name="message"
                            id="message"
                            placeholder='Your message'
                            title="Please enter a message."
                            required
                        />
                        <input ref={btn} type='submit' id="button" className='btn btn-lg mx-auto mt-16' value='Send message'/>
                        <script type="text/javascript"
                                src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js">
                        </script>
                        <script type="text/javascript">
                            emailjs.init('h7xiNrW-pTzv7e_3G')
                        </script>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};
export default Contact;

