import React, { useEffect, useRef } from 'react'

import Tile from './components/Tile.jsx';
import Pfp from './assets/Pfp.png';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

export default function Intro() {
  
  return (
    <div className="intro-container w-[50vw] mt-8 m-auto gap-y-4">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold mb-4">This is my intro</h1>
        <p className=''>
          Welcome to my website! Here, you'll find a collection of my projects,
          blog posts, and other interesting content that I've created. Feel free to
          explore and learn more about what I do.
        </p>
      </div>

      <div className='intro-grid grid grid-cols-3 gap-10'>
        <Tile 
          pic={Pfp}
          title="Project One"
          description="Description for Project One."
        />
        <Tile 
          pic={reactLogo}
          title="Project Two"
          description="Description for Project Two."
        />
        <Tile 
          pic={viteLogo}
          title="Project Three"
          description="Description for Project Three."
        />
        <Tile 
          pic={Pfp}
          title="Project Four"
          description="Description for Project Four."
        />
      </div>
    </div>
  )
}