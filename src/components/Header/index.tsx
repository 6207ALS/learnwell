import { Link } from 'react-router-dom'
import './styles.css'

function Header(): JSX.Element {
  return (
		<header id="header_container">
			<div id="company-title_container">
				<h1>Learnwell</h1>
			</div>
			<nav id="nav_container">
				<Link to="/about">About Us</Link>
				<Link to="/mission">Our Mission</Link>
				<a href="mailto:6207als@gmail.com">Contact Us</a>
			</nav>
		</header>
  )
}

export default Header