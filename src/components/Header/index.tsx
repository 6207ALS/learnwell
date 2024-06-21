import { Link } from 'react-router-dom'
import './styles.css'

// Public header, available to all users
function Header(): JSX.Element {
  return (
		<header id="header_container">
			<nav id="nav_container">
				<Link to="/"><h1>Learnwell</h1></Link>
				<div id="nav-buttons_container">
					<Link to="/about">About Us</Link>
					<Link to="/mission">Our Mission</Link>
					<Link to="/contact">Contact Us</Link>
				</div>
			</nav>
		</header>
  )
}

export default Header