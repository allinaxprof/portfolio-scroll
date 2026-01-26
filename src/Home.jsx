import React, { useEffect, useRef } from 'react'
import ScrollSequence2 from './components/ScrollSequence2.jsx';
import './index.css'

export default function Home() {
  
  return (
    <>
      <div className="p-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome Home</h1>
        <p className="text-gray-600">This is the home page.</p>
      </div>

      <ScrollSequence2 />
    </>
  )
}