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
        I am a Computer Science (BSc) graduate of 2024 from the <br/> University of British Columbia, Vancouver, Canada.
      </p>
      <p className="mb-3">
        I am proficient in <i><u> C# </u></i> and <i><u>  Typescript </u></i>, with particular experiences in <i><u>rapid prototyping</u></i>, <i><u>data visualization</u></i> and <i><u>CRM</u></i> platform development. 
      </p>
      <p className="mb-3">
        Like many people, my interest in Computer Science was ignited by video games. My first substantial project was a Unity 3D game where I implemented a grid system and A* pathfinding algorithm. This led me to work in 3D data visualization which allowed me to use <i><u>C#</u></i> and <i><u>OpenGL</u></i> in a professional setting.
      </p>
      <p className="mb-3">
        The frontend framework (UI Toolkit) in the project also exposed me to <u><i>MVVM</i></u> patterns and web development, which, combined with the experience of implementing an <u><i>REST API</i></u> in Typescript, led me to an internship in web development at iQIYI, one of the largest video streaming platforms in China. The high volume of feature requests and the need for automation in a fast-paced environment has honed my skills in <u><i>agile development</i></u>.
      </p>
      <p className="mb-3">
        Having developed software for Consulting, Education, and Digital Entertainment industries in both English and Chinese-speaking companies, I am now looking for opportunities where I can contribute both in software development and in bridging the gap between technical and non-technical stakeholders.
      </p>
    </motion.section>  )
}
