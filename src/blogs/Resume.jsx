import React, { useEffect, useRef } from 'react'
import Navbar from '../components/Navbar.jsx';
import Tile from '../components/Tile.jsx';
import Pfp from '/Pfp.png';

export default function Resume() {
  
  return (
    <div className="blog-page">
      <Navbar color="white" />
      <div className="intro-container w-[50vw] pt-8 pb-8 m-auto gap-y-4">
        <div className="mb-10 text-center">
            <h1 className="text-3xl font-bold mb-4">Resume</h1>
            <p className='italic'>
                "Do not stand at my grave and weep; <br></br>
                I am not there. I do not sleep." <br></br>
                - Mary Elizabeth Frye, 1932 <br></br>

                i.e. I haven't gotten around to this yet
            </p>
        </div>
      </div>
    </div>
  )
}