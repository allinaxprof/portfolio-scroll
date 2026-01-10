import './index.css'
import Main from './router.jsx'
import { Link } from 'react-router-dom'

function App() {
  return (
    <>
      <nav className="p-4">
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/QA">QA</Link>
        <Link to="/Intro" className="ml-4">Intro</Link>
      </nav>
      <Main />
    </>
  )
}

export default App
