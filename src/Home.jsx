import React, { useEffect, useRef } from 'react'
import Navbar from './components/Navbar.jsx'
import ScrollSequence2 from './components/ScrollSequence2.jsx';
import './index.css'

export default function Home() {
  
  return (
    <div className="home-page">
      <Navbar color="black" />
      <div className="p-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome!</h1>
        <p className="text-gray-600">Explore my world below!</p>
      </div>

      <ScrollSequence2 />
    </div>
  )
}