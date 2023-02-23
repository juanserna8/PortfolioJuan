import React, { useEffect } from 'react';

import JuanAbout from '../images/Juan-about.svg';
import About1 from '../images/About10.jpg';
import About2 from '../images/About2.jpg';
import About3 from '../images/About30.jpg';


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
            <img src={JuanAbout} alt="Juan's pic" className='mt-4' />
          </div>
          {/* Second column */}
          <div className='md:pt-[6rem] md:pl-4 md:pr-8 grid text-justify'>
            <p className=''>I am an easy going Web Developer who enjoys working in team and sharing ideas and solutions with people that sorround me. I'm always looking for ways to improve efficiency and add value to colleagues, groups and organizations.</p>
            <p className='pt-2'>As a junior web developer with expertise in React JS and AWS, and with a basic knowledge of MySQL and NoSQL databases such as Dynamo DB, I am passionate about building dynamic and responsive web applications. With a strong foundation in front-end development using React JS and serverless technologies using AWS, I am dedicated to creating elegant solutions to complex problems. My experience with AWS has allowed me to deploy web applications on the cloud, and I have had the opportunity to integrate various AWS services to improve the scalability, reliability, and security of my applications.</p>
            <p className='pt-2'>As a developer, I value collaboration and teamwork, and I am always striving to learn and grow. I am comfortable working in agile environments and have experience in adapting to changing requirements and tight timelines.</p>

            {/* Images */}
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 px-4 lg:pl-4 mt-4'>
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
