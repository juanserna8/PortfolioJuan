import React from 'react';

import { motion } from 'framer-motion';
import { ToastContainer } from 'react-toastify';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import Introduction from '../partials/Introduction';
import Stats from '../partials/Stats';
import Footer from '../partials/Footer';
import AboutJuan from '../partials/AboutJuan';
import SkillSet from '../partials/Skillset';
import Contact from '../partials/Contact';

function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.8 }}
      className="flex flex-col min-h-screen overflow-hidden"
    >

      <ToastContainer />
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1" aria-hidden="true">
          <PageIllustration />
        </div>

        {/*  Page sections */}
        <Introduction />
        <Stats />
        <AboutJuan />
        <SkillSet />
        <Contact />

      </main>

      {/*  Site footer */}
      <Footer />

    </motion.div>
  );
}

export default Home;