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
        From my studies and internships, I have worked on a language interpreter, a terrain-data visualization application, a REST API, plus a few full-stack React and Vue websites.
      </p>

      <p className="mb-3">
        I have enjoyed working with complex and performant applications that process dense data, while also making them easy to use and look good.
      </p>
    </motion.section>  )
}
