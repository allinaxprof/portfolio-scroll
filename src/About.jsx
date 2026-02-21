import React, { useEffect, useRef } from 'react'
import Navbar from './components/Navbar.jsx';
import Pfp from '/Pfp.png';
import insta from '/instagram-icon-black.png';

export default function About() {
  
  return (
    <div className='about-page'>
      <Navbar color="white" />
      <div className='about-container w-[50vw] pt-8 m-auto gap-y-4'>
      <div className="p-8 grid grid-cols-2 gap-10">
        <img src={Pfp} alt="picture" className='m-auto h-[20vh]'></img>
        <div className="">
          <h1 className="text-3xl font-bold mb-4">Hello!</h1>
          <p className="text-gray-600 mb-2">See my short portfolio below.</p>
          <a href="https://www.instagram.com/xxallinaxart/">
            <img className='w-5' src={insta}></img>
            <a 
              href="https://www.flaticon.com/free-icons/instagram-logo" 
              title="instagram logo icons"
              className="text-xs"
            >
              Instagram logo icons created by Freepik - Flaticon
            </a>
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