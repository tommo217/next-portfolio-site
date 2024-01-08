import React from 'react'
import Image from 'next/image'

type Props = {}

export default function Intro({}: Props) {
  return (
    <section>
        <div className='flex items-center justify-center'>  
            <div className='relative'>
                <Image 
                src="/portrait.jpg" 
                alt="Portrait of Tom"
                width="192"
                height="192"
                priority={true} 
                className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
                />

                <span className="absolute bottom-0 right-0 text-3xl">
                  👋
                </span>
            </div>
        </div>
    </section>
  )
}