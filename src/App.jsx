import './index.css'
import Main from './router.jsx'
import { Link } from 'react-router-dom'

function App() {
  return (
    <>
      <nav className="p-4">
        <a href="/" className="mr-4">Home</a>
        <a href="/QA">QA</a>
        <a href="/Intro" className="ml-4">Intro</a>
      </nav>
      <Main />
    </>
  )
}

export default App
