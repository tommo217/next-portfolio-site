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
        I am a 4th-year Computer Science student at UBC, Vancouver, Canada. 
        My interest and expertise is in <i><u>full-stack development</u></i> and <i><u>data processing / visualization</u></i>. 
      </p>
      <p className="mb-3">
        Like many people, my interest in Computer Science was ignited by video games. One of my first projects in University was a Unity 3D game where I implemented a grid system and A* pathfinding algorithm. This led me to work in <u><a>3D data visualization</a></u>, which allowed me to use C# and OpenGL in a professional setting.
      </p>
      <p className="mb-3">
        The XML and CSS frontend in the project also exposed me to web development, which, combined with the experience of making an API in Typescript at University, led me to full-stack development.  
      </p>
      <p className="mb-3">
        I am currently working (as internship) on a Vue.js-based CRM and administration platform at iQIYI, one of the largest video streaming platforms in China. 
      </p>
    </motion.section>  )
}
