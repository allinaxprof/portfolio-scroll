import React, { useEffect, useRef } from 'react'
import Navbar from './components/Navbar.jsx';
import Pfp from '/Pfp.png';
import insta from '/instagram-icon-black.png';
import linkedin from '/socialLinkedIn.png';

export default function About() {
  
  return (
    <div className='about-page'>
      <Navbar color="white" />
      <div className='about-container w-[50vw] pt-8 m-auto gap-y-4'>
      <div className="p-8 grid grid-cols-2 gap-10">
        <img src={Pfp} alt="picture" className='m-auto h-[20vh]'></img>
        <div className="">
          <h1 className="text-3xl font-bold mb-4">Hello, I'm Allina!</h1>
          <p className="text-gray-600 mb-2">See my abbreviated portfolio below.</p>

          <div className='flex space-x-4 mb-2'>
            <a href="https://www.instagram.com/xxallinaxart/" target="_blank" rel="noopener noreferrer">
              <img className='w-5' src={insta}></img>
            </a>
            <a href="https://www.linkedin.com/in/allina-x-67bab02a2/" target="_blank" rel="noopener noreferrer">
              <img className='w-5' src={linkedin}></img>
            </a>
          </div>

            <a 
              href="https://www.flaticon.com/free-icons/instagram-logo" 
              title="instagram logo icons"
              className="text-[0.6rem]"
              target="_blank" rel="noopener noreferrer"
            >
              <p>Instagram logo icons created by Freepik - Flaticon</p>
            </a>
            <a 
              href="https://www.flaticon.com/authors/aleksei-ryazancev" 
              title="linkedin logo icons"
              className="text-[0.6rem]"
              target="_blank" rel="noopener noreferrer"
            >
              <p>LinkedIn logo icon created by Aleksei Ryazancev</p>
            </a>
            
        </div>
      </div>
    </div>
      {/* Embed google slides/pdf with container to center */}
      <div className="iframe-container">
        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQ0KDQOe-dzD9iODymLF3oywIK3UfO6IwK9TCDPF01E99rhZsL0EYLrZ2VKZDuMqxs10FpJiofh-Uja/pubembed?start=false&loop=false&delayms=3000" width="600" height="400" className='m-auto'></iframe>
      </div>
    </div>
  )
}