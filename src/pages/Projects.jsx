import React from 'react';

import Header from '../partials/Header';
import ProjectsIntro from '../partials/ProjectsIntro';
import ProjectsInfo from '../partials/ProjectsInfo'
import Footer from '../partials/Footer';

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
      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Projects;