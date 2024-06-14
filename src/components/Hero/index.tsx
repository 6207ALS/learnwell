import "./styles.css"

function Hero() {
  return (
		<div id="hero_container">
			<div id="hero-text_container">
				<h1>Learn and Excel.</h1>
				<h2>Transform your education with media.</h2>
			</div>
			<div id="hero-buttons_container">
				<button className="hero_button">Learn More</button>
				<button className="hero_button">Watch Videos</button>
			</div>
		</div>
  )
}

export default Hero