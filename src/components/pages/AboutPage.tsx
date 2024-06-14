import { useState } from 'react'
import Header from "../Header"
import AnimatedPage from '../AnimatedPage'

import AboutBanner from "../AboutBanner"
import AboutBody from "../AboutBody"

function AboutPage() {
  return (
		<AnimatedPage>
			<div id="about-page_container">
				<AboutBanner />
				<AboutBody />
			</div>
		</AnimatedPage>
  )
}

export default AboutPage