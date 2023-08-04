import React, { useEffect } from 'react';

import { motion, useAnimation } from 'framer-motion';

import JuanAbout from '../images/Juan-about.svg';
import About1 from '../images/About1.webp';
import About2 from '../images/About2.webp';
import About3 from '../images/About3.webp';
import { useInView } from 'react-intersection-observer';


// Import Swiper
// import Swiper, { Autoplay, Navigation } from 'swiper';
// import 'swiper/swiper-bundle.css';
// Swiper.use([Autoplay, Navigation]);

function AboutJuan() {

  // useEffect(() => {
  //   // eslint-disable-next-line no-unused-vars
  //   const carousel = new Swiper('.carousel', {
  //     slidesPerView: 'auto',
  //     grabCursor: true,
  //     loop: true,
  //     centeredSlides: true,
  //     initialSlide: 1,
  //     spaceBetween: 24,
  //     autoplay: {
  //       delay: 7000,
  //     },
  //     navigation: {
  //       nextEl: '.carousel-next',
  //       prevEl: '.carousel-prev',
  //     },
  //   })
  // }, [])

  // Logic for initial animation
  const parentControls = useAnimation();
  // Hook to track if the last div (with id="paragraph") is in the viewport
  const { ref: ParentRef, inView: isParentInView } = useInView({
      triggerOnce: true, // Only trigger once when it becomes visible
      threshold: 0.2 // Adjust this threshold as needed
  });

  useEffect(() => {
      if (isParentInView) {
          // If the last div is in view, start its animation
          parentControls.start({
              opacity: 1
          });
      }
  }, [isParentInView, parentControls]);

  // Animation for first P
  const firstPControls = useAnimation();
  const { ref: FirstPRef, inView: isFirstPInView } = useInView({
    triggerOnce: true, // Only trigger once when it becomes visible
    threshold: 0.2 // Adjust this threshold as needed
  });

  useEffect(() => {
      if (isFirstPInView) {
          // If the last div is in view, start its animation
          firstPControls.start({
              opacity: 1,
              translateY: 0
          });
      }
  }, [isFirstPInView, firstPControls]);

  // Animation for second P
  const secondPControls = useAnimation();
  const { ref: SecondPRef, inView: isSecondPInView } = useInView({
    triggerOnce: true, // Only trigger once when it becomes visible
    threshold: 0.2 // Adjust this threshold as needed
  });

  useEffect(() => {
    if (isSecondPInView) {
        // If the last div is in view, start its animation
        secondPControls.start({
            opacity: 1
        });
    }
  }, [isSecondPInView, secondPControls]);

  // Animation for third P
  const thirdPControls = useAnimation();
  const { ref: ThirdPRef, inView: isThirdPInView } = useInView({
    triggerOnce: true, // Only trigger once when it becomes visible
    threshold: 0.2 // Adjust this threshold as needed
  });

  useEffect(() => {
    if (isThirdPInView) {
        // If the last div is in view, start its animation
        thirdPControls.start({
            opacity: 1
        });
    }
  }, [isThirdPInView, thirdPControls]);

  // Logic for images animation
  const imagesControls = useAnimation();
  // Hook to track if the last div (with id="paragraph") is in the viewport
  const { ref: ImagesRef, inView: isImagesInView } = useInView({
      triggerOnce: true, // Only trigger once when it becomes visible
      threshold: 0.3 // Adjust this threshold as needed
  });

  useEffect(() => {
      if (isImagesInView) {
          // If the last div is in view, start its animation
          imagesControls.start({
              opacity: 1
          });
      }
  }, [isImagesInView, imagesControls]);

  return (
    <section ref={ParentRef} className="border-t border-transparent dark:border-gray-800">
      <div className="py-12 md:py-20 mx-auto px-4 sm:px-6">
        <motion.div 
          className='grid grid-cols-1 md:grid-cols-2 gap-10 font-poppins'
          initial={{ opacity: 0}}
          animate={parentControls}
          transition={{ duration: 0.8}}
        >
          {/* First column */}
          <div className='col-span-1 flex flex-col mx-auto items-start'>
            <h2 className='h1 lg:text-3xl mb-4 text-center mx-auto items-center'>About me</h2>
            <motion.img style={{cursor: "grab",}} drag dragConstraints={{ left: 10, right: 50, bottom: 10, top: 2 }} src={JuanAbout} title="Juan's pic" alt="Juan's pic" loading='lazy' className='mx-auto mt-4 lg:mt-12 h-[22rem] md:h-auto' />
          </div>
          {/* Second column */}
          <div className='md:pt-[6rem] md:pl-4 md:pr-8 grid text-justify'>
            <div ref={FirstPRef}>
              <motion.p 
                className=''
                initial={{ opacity: 0, translateY: -80 }}
                animate={firstPControls}
                transition={{ duration: 1}}
              >
                I'm a team player who loves working with others and sharing ideas to come up with creative solutions. I'm always looking for ways to make things better and add value to my colleagues, groups, and organizations.
              </motion.p>
            </div>
            <div ref={SecondPRef}>
              <motion.p 
                className='pt-2'
                initial={{ opacity: 0 }}
                animate={secondPControls}
                transition={{ duration: 1, delay: 1}}
              >
                As a web developer with expertise in React JS, AWS, and project management/business consultancy skills, I'm passionate about building dynamic and responsive IT-related projects. I enjoy creating elegant solutions to complex IT challenges using React JS and AWS serverless technologies. I've also gained experience in deploying applications on the cloud and integrating various AWS services to make them more scalable, reliable, and secure.
              </motion.p>
            </div>
            <div ref={ThirdPRef}>
              <motion.p 
                className='pt-2'
                initial={{ opacity: 0 }}
                animate={thirdPControls}
                transition={{ duration: 1, delay: 1}}
              >
                In addition to my technical skills, I also have project management and business consultancy skills, which help me effectively plan, execute, and deliver successful projects. I can handle both the technical and strategic aspects of projects, making sure they are completed efficiently and effectively.
                Let's work together to create innovative solutions that drive results in the IT industry! With my collaborative and easy-going approach, along with my technical expertise and project management/business consultancy skills, I'm excited to contribute to the success of any team or organization.
              </motion.p>
            </div>

            {/* Images */}
            <div ref={ImagesRef} className='grid grid-cols-2 sm:grid-cols-3 md:hidden lg:grid gap-4 px-4 lg:pl-4 mt-4'>
              <motion.img 
                initial={{ opacity: 0}}
                animate={imagesControls}
                transition={{ duration: 0.5}}
                src={About1} 
                title='photo-working-out' alt="photo-working-out" 
                loading='lazy' 
                className='object-fill h-[10rem] aspect-square mx-auto rounded border border-gray-400' />
              <motion.img 
                initial={{ opacity: 0}}
                animate={imagesControls}
                transition={{ duration: 0.5, delay: 1 }}
                src={About2} 
                title='photo-travelling' alt="photo-travelling" 
                loading='lazy' 
                className='object-fill h-[10rem] aspect-square mx-auto rounded border border-gray-400' />
              <motion.img 
                initial={{ opacity: 0}}
                animate={imagesControls}
                transition={{ duration: 0.5, delay: 2 }}
                src={About3} 
                title='photo-eating-out' alt="photo-eating-out" 
                loading='lazy' 
                className='col-span-2 sm:col-span-1 mx-auto object-scale h-[10rem] aspect-square rounded border border-gray-400' />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutJuan;
