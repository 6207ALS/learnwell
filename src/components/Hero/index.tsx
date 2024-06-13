import "./styles.css"

function Hero() {
  return (
		<div id="hero_container">
			<div id="hero-left_container">
				<div id="hero-text_container">
					<h1>Learn and Excel.</h1>
					<h2>Transform your education with media.</h2>
				</div>
				<div id="hero-buttons_container">
					<button className="hero_button">Watch Videos</button>
					<button className="hero_button">Learn More</button>
				</div>
			</div>
			<div id="hero-right_container">
				<div id="hero-blobs_container">
					<div className="blob" id="blob-aqua"></div>
					<div className="blob" id="blob-navy"></div>
					<div className="blob" id="blob-gold"></div>
				</div>
			</div>
		</div>
  )
}

export default Hero