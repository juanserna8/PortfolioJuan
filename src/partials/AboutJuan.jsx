import React, { useEffect } from 'react';

import { motion } from 'framer-motion';

import JuanAbout from '../images/Juan-about.svg';
import About1 from '../images/About1.webp';
import About2 from '../images/About2.webp';
import About3 from '../images/About3.webp';


// Import Swiper
import Swiper, { Autoplay, Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';
Swiper.use([Autoplay, Navigation]);

function AboutJuan() {

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const carousel = new Swiper('.carousel', {
      slidesPerView: 'auto',
      grabCursor: true,
      loop: true,
      centeredSlides: true,
      initialSlide: 1,
      spaceBetween: 24,
      autoplay: {
        delay: 7000,
      },
      navigation: {
        nextEl: '.carousel-next',
        prevEl: '.carousel-prev',
      },
    })
  }, [])

  return (
    <section className="border-t border-transparent dark:border-gray-800">
      <div className="py-12 md:py-20 mx-auto px-4 sm:px-6">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 font-poppins'>
          {/* First column */}
          <div className='col-span-1 flex flex-col mx-auto items-start'>
            <h1 className='h1 lg:text-3xl mb-4 text-center mx-auto items-center'>About me</h1>
            <motion.img style={{cursor: "grab",}} drag dragConstraints={{ left: 10, right: 50, bottom: 10, top: 2 }} src={JuanAbout} alt="Juan's pic" className='mx-auto mt-4 lg:mt-12 h-[22rem] md:h-auto' />
          </div>
          {/* Second column */}
          <div className='md:pt-[6rem] md:pl-4 md:pr-8 grid text-justify'>
            <p className=''>I'm a team player who loves working with others and sharing ideas to come up with creative solutions. I'm always looking for ways to make things better and add value to my colleagues, groups, and organizations.</p>
            <p className='pt-2'>As a web developer with expertise in React JS, AWS, and project management/business consultancy skills, I'm passionate about building dynamic and responsive IT-related projects. I enjoy creating elegant solutions to complex IT challenges using React JS and AWS serverless technologies. I've also gained experience in deploying applications on the cloud and integrating various AWS services to make them more scalable, reliable, and secure.</p>
            <p className='pt-2'>In addition to my technical skills, I also have project management and business consultancy skills, which help me effectively plan, execute, and deliver successful projects. I can handle both the technical and strategic aspects of projects, making sure they are completed efficiently and effectively.
            Let's work together to create innovative solutions that drive results in the IT industry! With my collaborative and easy-going approach, along with my technical expertise and project management/business consultancy skills, I'm excited to contribute to the success of any team or organization.</p>

            {/* Images */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:hidden lg:grid gap-4 px-4 lg:pl-4 mt-4'>
              <img src={About1} alt="photo-working-out" className='object-fill h-[10rem] aspect-square mx-auto rounded border border-gray-400' />
              <img src={About2} alt="photo-travelling" className='object-fill h-[10rem] aspect-square mx-auto rounded border border-gray-400' />
              <img src={About3} alt="photo-eating-out" className='col-span-2 sm:col-span-1 mx-auto object-scale h-[10rem] aspect-square rounded border border-gray-400' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutJuan;
