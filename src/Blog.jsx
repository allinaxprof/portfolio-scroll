import React, { useEffect, useRef } from 'react'
import Navbar from './components/Navbar.jsx';
import Tile from './components/Tile.jsx';
import Pfp from '/Pfp.png';

export default function Blog() {
  
  return (
    <div className="blog-page">
      <Navbar color="white" />
      <div className="intro-container w-[50vw] pt-8 pb-8 m-auto gap-y-4">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold mb-4">My Brain Litter</h1>
        <p className=''>
          Hear my thoughts, see me in action, and watch me scream into the void.
        </p>
      </div>

      <div className='intro-grid grid grid-cols-3 gap-10'>
        <Tile 
          pic={Pfp}
          title="Resume"
          link = "/Resume"
          description="the only serious post here"
        />
      </div>
      </div>
    </div>
  )
}