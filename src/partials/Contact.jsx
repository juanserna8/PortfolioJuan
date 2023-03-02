import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { API } from 'aws-amplify';

import Select from '../images/select.webp';

const Contact = () => {
    const [request, setRequest] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });

    const [renderForm, setRenderForm] = useState(true);
        
    const handleChange = (e) => {
        setRequest(prev=>({...prev, [e.target.name]: e.target.value}))
    }

    const [invalidField, setInvalidField] = useState(null);

    // Post the form information to the API
    const handleSubmit = async (e) => {
        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d{10}$/;
        if(!emailRegex.test(request.email)) {
            setInvalidField('email')
        } else if (!phoneRegex.test(request.phone)) {
            setInvalidField('phone')
        } else {
            setInvalidField(null);
            try{
                let res = await API.post('quotes', '/create', {
                    body: {
                        name: request.name,
                        phone: request.phone,
                        email: request.email,
                        message: request.message
                    },
                });
                if(res.status == 200) {
                    toast("Success, your message has been sent", {
                        type: 'success'
                    });
                    setRenderForm(!renderForm);
                } else {
                    toast("Alert, your message couldn't be sent. Please try again", {
                        type: 'error'
                    })
                }
            } catch(err) {
                console.log(err);
                toast("Alert, your message couldn't be sent. Please try again", {
                    type: 'error'
                })
            }
        }
        
    }

    const [rotate, setRotate] = useState(false)

    console.log(invalidField)
    
    return ( 
        <section className="border-t border-transparent dark:border-gray-800">
            <div className="py-12 md:py-20 mx-auto px-4 sm:px-6">
                <div className="font-poppins max-w-3xl mx-auto">
                    <h1 className="h1 lg:text-3xl mb-4">Get in touch</h1>

                    <div className="grid grid-cols-12 mt-6 gap-2">

                        <motion.div 
                            animate={{ rotate: rotate ? 360 : 0 }}
                            transition={{ duration: 1.5 }}
                            onClick={() => {
                                setRotate(!rotate);
                            }}
                            className="col-span-5 cursor-pointer"
                        >
                            <img src={Select} alt="Juan's photo" />
                        </motion.div>

                        {/* Contact details container */}
                        <div className='col-span-7 grid grid-cols-5 md:content-start md:gap-0'>
                            <div className='col-span-5 md:col-span-3 md:mx-auto pt-4 md:pt-0'>
                                <p className='text-xl text-gray-600 font-poppins dark:text-white'>Email:</p>
                                <a href="mailto:sernadominguezj@gmail.com"><p className='text-sm md:text-lg text-gray-600 dark:text-gray-400'>sernadominguezj@gmail.com</p></a>
                            </div>
                            <div className='col-span-5 md:col-span-2 md:mx-auto md:mt-0'>
                                <p className='text-xl text-gray-600 font-poppins dark:text-white'>Mobile:</p>
                                <a href="tel:+61414029043"><p className='text-sm md:text-lg text-gray-600 dark:text-gray-400'>0414029043</p></a>
                            </div>
                        

                            {/* Social media in mobile */}
                            <div className='md:hidden col-span-5 mt-4'>
                                <p className='text-sm text-gray-600 dark:text-white'>Follow me on Social Media:</p>
                                <div className='flex mt-2'>
                                    <a href="https://github.com/juanserna8" target="_blank"><svg className="h-6 w-6 text-aquamarine-100 mr-4 border border-aquamarine-100 rounded"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" /></svg></a>
                                    <a href="https://www.linkedin.com/in/jdserna/" target="_blank"><svg className="h-6 w-6 text-aquamarine-100 mr-4 border border-aquamarine-100 rounded"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg></a>
                                    <a href="https://twitter.com/juanserna9404" target="_blank"><svg className="h-6 w-6 text-aquamarine-100 mr-4 border border-aquamarine-100 rounded"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753C20.18 7.773 21.692 5.25 22 4.009z" /></svg></a>
                                </div>
                            </div>

                            {/* Form in desktop */}
                            {/* If the message has not been sent, render the form */}
                            {renderForm === true && (
                                <div className='col-span-5'>
                                    <div className='col-span-5 hidden md:flex items-end mt-10'>
                                        <p className='text-xl text-gray-600 font-poppins dark:text-white'>Call me or leave a message</p>
                                        <svg className="h-6 w-6 text-white"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="7 7 12 12 17 7" />  <polyline points="7 13 12 18 17 13" /></svg>
                                    </div>

                                    <form onSubmit={handleSubmit} className='hidden md:flex items-center mt-4'>
                                        <div className='flex flex-col'>
                                            <input type="text" onChange={handleChange} name="name" placeholder='Name' className='w-[18.5rem] bg-transparent border-t-0 border-l-0 border-r-0 border-b-1 p-0 mb-4 text-gray-600 dark:text-gray-400 text-lg' required />
                                            <input type="number" onChange={handleChange} name="phone" placeholder='Phone' className='w-[18.5rem] bg-transparent border-t-0 border-l-0 border-r-0 border-b-1 p-0 mb-4 text-gray-600 dark:text-gray-400 text-lg' required />
                                            {invalidField === 'phone' && (
                                                <div className='-mt-2 mb-2'>
                                                    <p className='text-xs text-red-300'>Please provide a valid phone number</p>
                                                </div>
                                            )}
                                            <input type="email" onChange={handleChange} name="email" placeholder='Email' className='w-[18.5rem] bg-transparent border-t-0 border-l-0 border-r-0 border-b-1 p-0 mb-4 text-gray-600 dark:text-gray-400 text-lg' required />
                                            {invalidField === 'email' && (
                                                <div className='-mt-2 mb-2'>
                                                    <p className='text-xs text-red-300'>Please provide a valid email address</p>
                                                </div>
                                            )}
                                            <input type="text" onChange={handleChange} name="message" placeholder='Message' className='w-[18.5rem] bg-transparent border-t-0 border-l-0 border-r-0 border-b-1 p-0 mb-4 text-gray-600 dark:text-gray-400 text-lg' required />
                                            <button className='mt-4 px-2 h-10 text-white rounded text-sm text-center w-full bg-teal-500 hover:bg-orange-700 dark:hover:bg-transparent dark:hover:border dark:hover:border-teal-500 dark:hover:text-teal-500 shrink-0 transition duration-500 dark:duration-1000'>
                                                <span>Send message</span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            )}

                            {/* If the message has been sent, then render a thank you message */}
                            {renderForm === false && (
                                <div className='mt-20 col-span-5 hidden md:grid gap-2'>
                                    <p>Thanks for reaching out! I will be in touch shortly.</p>
                                    <p>Meanwhile, visit my most recent projects:</p>
                                    <Link to="/projects" className='mt-4 mx-auto'>
                                        <button className='btn py-2 px-4 text-white bg-teal-500 hover:bg-orange-700 dark:hover:bg-transparent dark:hover:border dark:hover:border-teal-500 dark:hover:text-teal-500 shrink-0 transition duration-500 dark:duration-800'>
                                            Projects
                                        </button>
                                    </Link>
                                </div>
                            )}
                            
                        </div>
                        
                    </div>

                    {/* Social Media Desktop */}
                    <div className='hidden md:flex flex-col mt-4 ml-4'>
                        <p className='text-xl text-gray-600 font-poppins dark:text-white'>Follow me on Social Media:</p>
                        <div className='flex mt-2'>
                            <a href="https://github.com/juanserna8" target="_blank"><svg className="h-7 w-7 text-aquamarine-100 mr-6 border border-aquamarine-100 rounded"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" /></svg></a>
                            <a href="https://www.linkedin.com/in/jdserna/" target="_blank"><svg className="h-7 w-7 text-aquamarine-100 mr-6 border border-aquamarine-100 rounded"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg></a>
                            <a href="https://twitter.com/juanserna9404" target="_blank"><svg className="h-7 w-7 text-aquamarine-100 mr-6 border border-aquamarine-100 rounded"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753C20.18 7.773 21.692 5.25 22 4.009z" /></svg></a>
                        </div>
                    </div>

                    {/* Form mobile view */}
                    {/* Render form if it has not been submited */}
                    {renderForm === true && (
                        <div>
                            <div className='flex items-end md:hidden'>
                                <p className='pl-2 mt-4'>Call me or leave a message</p>
                                <svg className="h-6 w-6 text-white"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="7 7 12 12 17 7" />  <polyline points="7 13 12 18 17 13" /></svg>
                            </div>
                            <form onSubmit={handleSubmit} className='mt-4 pl-2 w-full md:hidden'>
                                <input type="text" onChange={handleChange} name="name" placeholder='Name' className='w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b-1 p-0 mb-4 text-gray-600 dark:text-gray-400 text-lg' required />
                                <input type="number" onChange={handleChange} name="phone" placeholder='Phone' className='w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b-1 p-0 mb-4 text-gray-600 dark:text-gray-400 text-lg' required />
                                {invalidField === 'phone' && (
                                    <div className='-mt-2 mb-2'>
                                        <p className='text-xs text-red-300'>Please provide a valid phone number</p>
                                    </div>
                                )}
                                <input type="email" onChange={handleChange} name="email" placeholder='Email' className='w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b-1 p-0 mb-4 text-gray-600 dark:text-gray-400 text-lg' required />
                                {invalidField === 'email' && (
                                    <div className='-mt-2 mb-2'>
                                        <p className='text-xs text-red-300'>Please provide a valid email address</p>
                                    </div>
                                )}
                                <input type="text" onChange={handleChange} name="message" placeholder='Message' className='w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b-1 p-0 mb-4 text-gray-600 dark:text-gray-400 text-lg' required />
                                <div className='w-full flex justify-center'>
                                    <button className='mt-4 btn text-white text-lg bg-teal-500 hover:bg-orange-700 shrink-0'>
                                        <span>Send message</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}

                    {/* If the message has been sent, then render a thank you message */}
                    {renderForm === false && (
                        <div className='md:hidden px-4'>
                            <div className='mt-4 col-span-5 grid gap-2 text-sm'>
                                <p>Thanks for reaching out! I will be in touch shortly.</p>
                                <p>Meanwhile, visit my most recent projects:</p>
                                <Link to="/projects" className='mt-4 mx-auto'>
                                    <button className='btn py-2 px-4 text-white bg-teal-500 hover:bg-orange-700'>
                                        Projects
                                    </button>
                                </Link>
                            </div>
                        </div>
                    )}


                </div>
            </div>
        </section>
     );
}
 
export default Contact;