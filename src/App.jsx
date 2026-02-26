import Main from './router.jsx'
import Navbar from './components/Navbar.jsx'
import { Link } from 'react-router-dom'

function App() {
  return (
    <>
      <Main />
      <div className="footer w-[90vw] m-auto p-8 text-xs">
        <p>© Allina Xiao Jan 2026. All rights reserved. </p>
        
        <p>All artwork, images, and content on this portfolio are the intellectual property of Allina Xiao 
          and protected by copyright laws. No part of this portfolio may be reproduced, distributed, or used 
          in any form without prior written permission from the artist.</p>
      </div>
    </>
  )
}

export default App
