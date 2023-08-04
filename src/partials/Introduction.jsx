import React, { useEffect, useRef, useState } from 'react';
import VanillaTilt from 'vanilla-tilt';
import { motion } from 'framer-motion';

import IphoneMockup from '../images/iphone-mockup.png';
// import JuanPhone from "../images/Juan-phone.svg"
import JuanPhone from "../images/Juan-phone-smaller.jpg";
import Resume from "../assets/resume.pdf";
import LoadImage from '../images/loading.png';


function Introduction() {

  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = () => {
    setLoaded(true);
  }

  const tiltRef = useRef(null);

  const options = {
    scale: 1,
    speed: 2000,
    max: 30
  };

  useEffect(() => {
    VanillaTilt.init(tiltRef.current, options);
  }, [options]);

  const sentences = [
    {id: 1, text: "Based in Hobart, Tasmania."},
    {id: 2, text: "Front-end development, Business Consultancy and Digital Transformation."},
    {id: 3, text: "Technology and Marketing/Administration Liaison for Optimal Results."}
  ]

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-10 md:pt-40 md:pb-16">

          {/* Hero content */}
          <div className="md:grid md:grid-cols-12 md:gap-12 lg:gap-20 items-center">

            {/* Content */}
            <div className="md:col-span-6 lg:col-span-7 mb-8 md:mb-0 text-center md:text-left">
              <h1 className="h1 lg:text-6xl mb-4 font-open" data-aos="fade-down">Hey there, I'm Juan Serna</h1>
              <p className="text-xl text-gray-600 font-poppins dark:text-white" data-aos="fade-down" data-aos-delay="150">Front-end Developer and Project Management Professional</p>
              <a className="mt-8 btn text-xl btn-general" href={Resume} download>
                Resume
                <svg className="h-6 w-6 text-white ml-4"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                </svg>
              </a>
            
              <div className='max-w-sm sm:max-w-md mx-auto md:max-w-none text-left text-gray-600 dark:text-gray-400 mt-8 -mb-2 font-poppins'>
                {sentences.map((sentence, i) => (
                  <motion.div
                    key={sentence.id}
                    className='flex items-center mb-2'
                    initial={{ opacity: 0, translateX: -50, translateY: -50}}
                    animate={{ opacity: 1, translateX: 0, translateY: 0}}
                    transition={{ duration: 0.3, delay: i * 1}}
                  >
                    <svg className="w-3 h-3 fill-current text-teal-400 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>{sentence.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile mockup */}
            <div ref={tiltRef} className="md:col-span-5 lg:col-span-5 text-center md:text-right" data-aos="fade-up" data-aos-delay="450">
              <div className="inline-flex relative justify-center items-center">
                {/* Glow illustration */}
                <svg className="absolute mr-12 mt-32 pointer-events-none -z-1 dark:opacity-40" aria-hidden="true" width="678" height="634" viewBox="0 0 678 634" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="240" cy="394" r="240" fill="url(#piphoneill_paint0_radial)" fillOpacity=".4" />
                  <circle cx="438" cy="240" r="240" fill="url(#piphoneill_paint1_radial)" fillOpacity=".6" />
                  <defs>
                    <radialGradient id="piphoneill_paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(90 -77 317) scale(189.054)">
                      <stop stopColor="#667EEA" />
                      <stop offset="1" stopColor="#667EEA" stopOpacity=".01" />
                    </radialGradient>
                    <radialGradient id="piphoneill_paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(90 99 339) scale(189.054)">
                      <stop stopColor="#9F7AEA" />
                      <stop offset="1" stopColor="#9F7AEA" stopOpacity=".01" />
                    </radialGradient>
                  </defs>
                </svg>
                {/* Image inside mockup size: 290x624px (or 580x1248px for Retina devices) */}
                {!loaded && (
                  <img src={LoadImage} alt="loading image" className='absolute animate-spin w-[20rem]' />
                )}
                <img className="absolute" src={JuanPhone} loading='eager' width="290" height="624" style={{ maxWidth: '84.33%', display: loaded ? 'block' : 'none' }} title='Developer picture' alt="Features illustration" onLoad={handleImageLoad} />
                {/* iPhone mockup */}
                <img className="relative max-w-full mx-auto md:mr-0 md:max-w-none h-auto pointer-events-none" src={IphoneMockup} width="344" height="674" title='iPhone mockup' alt="iPhone mockup" aria-hidden="true" loading='eager' />
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Introduction;