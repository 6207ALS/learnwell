import AnimatedComponent from '../AnimatedComponent'

import AboutBanner from "../AboutBanner"
import AboutBody from "../AboutBody"

function AboutPage() {
  return (
		<AnimatedComponent>
			<div id="about-page_container">
				<AboutBanner />
				<AboutBody />
			</div>
		</AnimatedComponent>
  )
}

export default AboutPage