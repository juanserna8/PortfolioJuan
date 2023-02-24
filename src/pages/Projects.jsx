import React from 'react';

import { motion } from 'framer-motion';

import Header from '../partials/Header';
import ProjectsIntro from '../partials/ProjectsIntro';
import ProjectsInfo from '../partials/ProjectsInfo'
import Footer from '../partials/Footer';


function Projects() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.8 }}
    className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />
      {/* Blog style in HeroBlog, articles style in FeaturedPosts */}
      {/*  Page content */}
      <main className="grow">

        {/*  Page sections */}
        <ProjectsIntro />
        <ProjectsInfo />
      </main>

      {/*  Site footer */}
      <Footer />

    </motion.div>
  );
}

export default Projects;