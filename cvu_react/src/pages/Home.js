import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <header>
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