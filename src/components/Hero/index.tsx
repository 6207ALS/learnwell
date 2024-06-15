import "./styles.css"
import { Link } from "react-router-dom"


function Hero() {
  return (
		<div id="hero_container">
			<div id="hero-text_container">
				<h1>Learn and Excel.</h1>
				<h2>Transform your education with media.</h2>
			</div>
			<div id="hero-buttons_container">
				<Link to="/about" className="hero_button">Learn More</Link>
				<Link to="/videos" className="hero_button">Watch Videos</Link>
			</div>
		</div>
  )
}

export default Hero