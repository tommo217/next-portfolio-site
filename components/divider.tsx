"use client"; 
import React from 'react'
import {motion} from 'framer-motion'; 


export default function Divider() {
  return (
    <motion.div
      className='bg-gray-300 my-16 h-16 w-1 rounded-full hidden sm:block'
      id='sectionDivider'
      initial={{ opacity:0, y:100}}
      animate={{opacity:1, y:0}}
      transition={{delay:0.125}}>
    </motion.div>
  )
}
