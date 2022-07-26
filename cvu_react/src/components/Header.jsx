
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <header>
        <div className='header'>
            <h1>Celestial Vibration Unit</h1>
            <h3>...a modular synthesizer living in a virtual world</h3>
        </div>
      <div className='nav'>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/listen">Listen</Link>
        <Link to="/member">Become a Member</Link>
      </nav>
      </div>
    </header>
  )
}

export default Header