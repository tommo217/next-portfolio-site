"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import {BsArrowRight, BsLinkedin} from 'react-icons/bs';
import {HiDownload} from 'react-icons/hi';
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
          <span className="font-bold"> Hello, I'm Tom.  </span> 
          I'm a <span className="italic">UBC CS</span> student of class <span className="italic">2024</span>.
          I have over <span className="font-bold">12 months</span> of work experience
           in <span className='underline'>C# </span> and <span className='underline'>Full-stack</span>  development. 
        </motion.p>

        {/* buttons */}
        <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4"
          initial={{ opacity: 0, y: 100}}
          animate={{ opacity: 1, y: 0}}
          transition={{delay:0.1}}>
          <Link 
            href="#contact"
            className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full 
             focus:scale-105 hover:scale-110 hover:bg-gray-950 active:scale-105 transition-all"> 
            Contact me here <BsArrowRight className='opacity-70'/> 
          </Link>
          <a 
            className="bg-white px-7 py-3 flex items-center gap-2 rounded-full
            focus:scale-105 hover:scale-110 active:scale-105 transition-all
            border border-black/10"
            href="/resume.pdf"
            download> 
            Download CV <HiDownload/> 
          </a>
          <a className="bg-white p-4 flex items-center gap-2 rounded-full
          focus:scale-105 hover:scale-110 active:scale-105 transition-all
          border border-black/10 cursor-pointer"
          href="https://www.linkedin.com/in/tao-mo-1474ab148/"
          target="_blank">
            <BsLinkedin/>
          </a>

        </motion.div>
    </section>
  )
}