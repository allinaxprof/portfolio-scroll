import React, { useEffect, useRef } from 'react'

import Navbar from './components/Navbar.jsx';
import Tile from './components/Tile.jsx';
import assignment1 from '/twodozen/twodozen-final-06.jpg';
import transWeek from '/transaware/transawareweek-y2k.jpeg';
import utaWelcomeHome from '/utaWelcome/IMG_2555.jpg'
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
          games, and other content I've created. Feel free to
          explore and learn more about the work I've done.
        </p>
      </div>

      <div className='intro-grid grid grid-cols-3 gap-10'>
        <Tile 
          pic={utaWelcomeHome}
          title="Digital Illustration"
          link = "projects/uta-welcome-home"
          description="Process for UTA Welcome Home 2025"
        />
        <Tile 
          pic={transWeek}
          title="Banner Designs"
          link = "projects/TransAwarenessWeek"
          description="Iterations for NYU LGBTQ+ Center Application"
        />
        <Tile 
          pic={assignment1}
          title="Env Photography"
          link = "projects/Assignment1"
          description="two dozen, object, steps, narrative"
        />
      </div>
      </div>
    </div>
  )
}