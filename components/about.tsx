"use client"; 
import React from 'react'
import {motion} from 'framer-motion'; 
import SectionHeading from '@/components/section-heading';

export default function About() {
  return (
    <motion.section
      className="mb-20 max-w-[40rem] text-center leading-8 sm:mb-28 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.150 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a 4th-year Computer Science student at the University of British Columbia, Vancouver, Canada. 
        I am proficient in <i><u> C# </u></i> and <i><u>  Typescript </u></i>, with a particular interest in <i><u>data processing</u></i> and <i><u>visualization</u></i>. 
      </p>
      <p className="mb-3">
        Like many people, my interest in Computer Science was ignited by video games. My first substantial project was a Unity 3D game where I implemented a grid system and A* pathfinding algorithm. This led me to work in <u><a>3D data visualization</a></u>, which allowed me to use C# and OpenGL in a professional setting.
      </p>
      <p className="mb-3">
        The frontend framework (UI Toolkit) in the project also exposed me to <i>MVVM</i> patterns and web development, which, combined with the experience of implementing an API in Typescript, led me to an internship in full-stack development.  
      </p>
      <p className="mb-3">
        I am currently working as intern on a Vue and Typescript - based CRM and administration platform at iQIYI, one of the largest video streaming platforms in China. 
      </p>
    </motion.section>  )
}
