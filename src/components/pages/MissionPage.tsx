import { useState } from 'react'
import Header from "../Header"
import MissionBanner from "../MissionBanner"
import MissionBody from "../MissionBody"

import AnimatedPage from '../AnimatedPage'

function MissionPage() {
  return (
		<AnimatedPage>
			<div id="mission-page_container">
				<MissionBanner />
				<MissionBody />
			</div>
		</AnimatedPage>
  )
}

export default MissionPage