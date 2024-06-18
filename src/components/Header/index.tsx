import { useContext } from "react"
import { Link, useNavigate } from 'react-router-dom'
import './styles.css'
import AppContext from "../../helpers/appContext"

function Header(): JSX.Element {
	const { user, handleLogout } = useContext(AppContext)
	const navigate = useNavigate();

	const handleClickSignInOut = () => {
		if (user.isLoggedIn) {
			handleLogout();
		} else {
			navigate("/signin")
		}
	}

  return (
		<header id="header_container">
			<nav id="nav_container">
				<Link to="/"><h1>Learnwell</h1></Link>
				<div id="nav-buttons_container">
					<Link to="/about">About Us</Link>
					<Link to="/mission">Our Mission</Link>
					<Link to="/contact">Contact Us</Link>
					<a
						onClick={handleClickSignInOut}
					>{user.isLoggedIn ? "Sign Out" : "Sign In"}</a>
				</div>
			</nav>
		</header>
  )
}

export default Header