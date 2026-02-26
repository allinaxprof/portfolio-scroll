import React, { useEffect, useRef } from 'react'

import Navbar from './components/Navbar.jsx';
import Tile from './components/Tile.jsx';
import assignment1 from '/twodozen/twodozen-final-06.jpg';
//import Pfp from 'Pfp.png';

export default function Intro() {
  
  return (
    <div className="intro-page">
      <Navbar color="white"></Navbar>
      <div className="intro-container w-[50vw] pt-8 pb-8 m-auto gap-y-4">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold mb-4">Projects</h1>
        <p className=''>
          Here, you'll find a collection of my projects,
          games, and other interesting content that I've created. Feel free to
          explore and learn more about the work I've done.
        </p>
      </div>

      <div className='intro-grid grid grid-cols-3 gap-10'>
        <Tile 
          pic={assignment1}
          title="Environment Photos"
          link = "projects/Assignment1"
          description="two dozen, object, steps, narrative"
        />
        <Tile 
          pic={assignment1}
          title="Kuleshov"
          link = "projects/kuleshov"
          description="two dozen, object, steps, narrative"
        />
      </div>
      </div>
    </div>
  )
}