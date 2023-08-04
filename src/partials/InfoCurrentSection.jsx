import { useState } from "react";

import { motion } from "framer-motion";

const InfoCurrentSection = (project) => {
    const [currentSection, setCurrentSection] = useState(0)

    const handleNext = () => {
        setCurrentSection(currentSection + 1);
    }
    
    return (
        <motion.div 
            initial={{ x: -250 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }} 
            className='grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8'
        >
            {/* Left column */}
            <div>
                <div 
                    className='h-[20rem] bg-center bg-no-repeat bg-contain flex mt-2'
                    style={{ backgroundImage: `url(${project.project.info[currentSection].image})`}}
                >
                    <div 
                        className='basis-[10%] bg-gray-900/50 md:bg-white/10 md:dark:bg-gray-900/50 grid items-center'
                        onClick={() => {
                            currentSection > 0 && setCurrentSection(currentSection - 1) 
                        }}
                    >
                        <svg className="h-10 w-10 text-white md:text-black md:dark:text-white mx-auto"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="15 6 9 12 15 18" /></svg>
                    </div>
                    <div className='basis-[80%]'></div>
                    <div 
                        className='basis-[10%] bg-gray-900/50 md:bg-white/10 md:dark:bg-gray-900/50 grid items-center'
                        onClick={() => {
                            currentSection < project.project.info.length - 1 && handleNext();
                        }}
                    >
                        <svg className="h-10 w-10 text-white md:text-black md:dark:text-white mx-auto"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="9 6 15 12 9 18" /></svg>
                    </div>
                </div>
            </div>

            {/* Right column */}
            <div className='flex flex-col lg:mt-4 px-8 md:px-2'>
                <p className='text-2xl text-gray-600 font-poppins dark:text-white'>{project.project.info[currentSection].title}</p>
                <p className='text-xl text-gray-600 dark:text-gray-400 mt-4 text-justify'>{project.project.info[currentSection].description}</p>
            </div>

        </motion.div>
    );
}
 
export default InfoCurrentSection;