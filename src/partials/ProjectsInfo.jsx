import React, { useState } from 'react';

import projectsDetails from '../assets/projectsDetails.json';
import InfoCurrentSection from './InfoCurrentSection';

function ProjectsInfo() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-16">
        
          <ul>{projectsDetails.map((project, index) => {
            return(
              <li key={index} className='grid mb-12'>
                <div className='flex mb-2'>
                  <p className='text-3xl text-gray-600 font-poppins dark:text-white mr-4'>{project.name}</p>
                  <a href={project.link} target="_blank"><svg className="h-8 w-8 text-white"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5" />  <line x1="10" y1="14" x2="20" y2="4" />  <polyline points="15 4 20 4 20 9" /></svg></a>
                </div>
                <InfoCurrentSection project={project} />
              </li>
            )
          })}
          </ul>

        </div>
      </div>
    </section>
  );
}

export default ProjectsInfo;
