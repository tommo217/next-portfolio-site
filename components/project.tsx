"use client";
import { useRef } from "react";
import { projectsData, ProjectProps} from "@/lib/data";
import { FaGithub, FaLink } from 'react-icons/fa';
import Image from "next/image";

export default function Project({title , description, tags, imageUrl, github, link}: ProjectProps) {
    const ref = useRef<HTMLElement>(null); 

    return (
    <section ref={ref}
    className="group bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-8 last:mb-0
    hover:bg-gray-200 transition">
        <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full
        group-even:ml-[18rem] group-odd:mr-[18rem]'>
            <h3 className='text-2xl font-semibold'>
                {title} 
                {github && <button className="btn-icon p-1">
                    <a href={github} target="_blank"><FaGithub size="20px" /></a>
                </button>}
                {link && <button className="btn-icon p-1">
                    <a href={link} target="_blank"><FaLink size="20px" /></a>
                </button>}
            </h3>
            <p className='mt-2 leading-relaxed text-gray-700'>{description}</p>
            <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
                {tags.map((tag, index) => (
                    <li className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full'
                    key={index}>{tag}</li>
                ))}
            </ul>
        </div>

        <Image src={imageUrl} alt="Project Preview" quality={90}
        className='absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        grout-even:right-[initial] group-even:-left-40
        group-hover:-translate-x-3
        group-hover:translate-y-2
        group-hover:-rotate-2
        group-hover:scale-105
        group-even:group-hover:rotate-2
        transition'/>
        
    </section>)
}