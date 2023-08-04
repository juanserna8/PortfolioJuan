import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";

function Stats() {

  const cards = [
    { id: 1, percentage: "30%", text: "Processes integration"},
    { id: 2, percentage: "25%", text: "Coding"},
    { id: 3, percentage: "25%", text: "Admin"},
    { id: 4, percentage: "20%", text: "Social life"}
  ];

   // Logic for cards animation
   const cardsControls = useAnimation();
   // Hook to track if the last div (with id="paragraph") is in the viewport
   const { ref: CardsRef, inView: isCardsInView } = useInView({
       triggerOnce: true, // Only trigger once when it becomes visible
       threshold: 0.6 // Adjust this threshold as needed
   });

   useEffect(() => {
       if (isCardsInView) {
           // If the last div is in view, start its animation
           cardsControls.start({
               opacity: 1,
               translateY: 0,
               translateX: 0
           });
       }
   }, [isCardsInView, cardsControls]);

  return (
    <section className="relative">
      {/* Background gradient (light version only) */}
      <div className="absolute bottom-0 left-0 right-0 h-128 bg-gradient-to-t from-gray-100 to-white pointer-events-none -z-10 dark:hidden" aria-hidden="true"></div>
      {/* End background gradient (light version only) */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div ref={CardsRef} className="grid grid-cols-2 gap-4 lg:gap-6 md:grid-cols-4 text-center" data-aos-id-stats>
            {cards.map((card, i) => (
              <motion.div
                key={card.id}
                className='bg-white dark:bg-gray-800 py-8 px-1 shadow-2xl'
                initial={{ opacity: 0, translateX: -50, translateY: -50}}
                animate={cardsControls}
                transition={{ duration: 0.3, delay: i * 1}}
              >
                <h2 className='font-red-hat-display text-3xl font-extrabold tracking-tighter mb-1'>{card.percentage}</h2>
                <p className='text-gray-600 dark:text-gray-400'>{card.text}</p>

              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;