"use client"; 
import React from 'react'
import {motion} from 'framer-motion'; 
import SectionHeading from '@/components/section-heading';

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.150 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3'>
        <i>I enjoy making complex data accessible and interactible</i>.
      </p>
      <p className="mb-3">
        So far, I have worked on a terrain-data visualization application, <br/> a REST API, a DSL language compiler, <br/> plus a few full-stack React and Vue websites.
      </p>
    </motion.section>  )
}
