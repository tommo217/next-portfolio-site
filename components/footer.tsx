import React from 'react'
import { FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-gray-500 text-center">
      <small>
      <div className="flex justify-center">
        By Tom Mo | 2024 
        <a href="" target="_blank" className="p-1"> <FaGithub size="12px" /> </a>
      </div>
      <p>
        Built with React & Next.js, Typescript, Tailwind CSS & Framer Motion. 
        Adapted from Bytegrad's amazing <u><a href="https://www.youtube.com/watch?v=sUKptmUVIBM">tutorial</a></u>.
      </p>
       </small>
    </footer>
  )
}
