"use client"

import React from 'react'
import Image from 'next/image'
import {motion} from "framer-motion"; 

type Props = {}

export default function Intro({}: Props) {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0 '>
        <div className='flex items-center justify-center'>  
            <div className='relative'>
              <motion.div
                initial={{opacity:0, scale:0}}
                animate={{opacity:1, scale:1}}
                transition={{duration: 0.2}}
              >
                <Image 
                src="/portrait.jpg" 
                alt="Portrait of Tom"
                width="192"
                height="192"
                priority={true} 
                className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
                />
              </motion.div>

              <motion.span className="absolute bottom-0 right-0 text-3xl"
              initial={{opacity:0, scale:0}}
              animate={{opacity:1, scale:1}}
              transition={{
                type: 'spring',
                stiffness: 125,
                delay:0.1, 
                duration: 0.7,
              }}>
                👋
              </motion.span>
              
            </div>
        </div>
        <motion.p 
        className='mb-10 mt-10 px-4 text-xl font-medium !leading-[1.5] sm:text-3xl'
        initial={{opacity: 0, y:100}}
        animate={{opacity: 1, y:0}}>
          <span className="font-bold"> Hello, I&apos;m Tom.  </span> I&apos;m a 
          UBC Computer Science student of class 2024.
          I have over <span className="font-bold">12 months</span> of work experience
           in <span className='underline'>C# </span> and <span className='underline'>Full-stack</span>  development. 
        </motion.p>

        <div>
          
        </div>
    </section>
  )
}