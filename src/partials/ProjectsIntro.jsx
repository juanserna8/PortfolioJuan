import React from 'react';

import ProjectsBG from '../images/projectsbg.webp';

function ProjectsIntro() {
  return (
    <section className="relative">

      {/* Background image */}
      <div className="absolute inset-0 h-128 pt-16 box-content -z-1">
        <img className="absolute inset-0 w-full h-full object-cover opacity-25" src={ProjectsBG} width="1440" height="577" alt="About" />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900" aria-hidden="true"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-16">

          {/* Featured article */}
          <div className="max-w-3xl" data-aos="fade-down">
            <article>
              <header>
                {/* Title and excerpt */}
                <div className="text-center md:text-left">
                  <h1 className='h1 lg:text-6xl mb-4 font-open text-left'>Projects</h1>
                  <p className="text-xl text-gray-600 dark:text-gray-400 text-left">Check out some of the most recent projects I have done/collaborated in. My experience is based on websites development, digital transformation projects and business consultancy.</p>
                </div>
              </header>
            </article>
          </div>

        </div>
      </div>

    </section>
  );
}

export default ProjectsIntro;