import React from 'react';

import Header from '../partials/Header';
import ProjectsIntro from '../partials/ProjectsIntro';
import ProjectsInfo from '../partials/ProjectsInfo'
// import FeaturedPosts from '../partials/FeaturedPosts';
import BlogList from '../partials/BlogList';
import Footer from '../partials/Footer';
import Carousel from '../partials/Carousel';

function Projects() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />
      {/* Blog style in HeroBlog, articles style in FeaturedPosts */}
      {/*  Page content */}
      <main className="grow">

        {/*  Page sections */}
        <ProjectsIntro />
        <ProjectsInfo />
        <Carousel />
        {/* <FeaturedPosts /> */}
        <BlogList />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Projects;