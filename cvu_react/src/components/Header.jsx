
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <header>
        <div>
            <h1>Celestial Vibration Unit</h1>
            <h3>...a modular synthesizer living in a virtual world</h3>
        </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/listen">Listen</Link>
        <Link to="/member">Become a Member</Link>
      </nav>
    </header>
  )
}

export default Header