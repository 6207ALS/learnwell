import { useState } from 'react'
import Header from "../Header"
import MissionBanner from "../MissionBanner"
import MissionBody from "../MissionBody"

function MissionPage() {
  return (
		<div id="mission-page_container">
			<Header />
			<MissionBanner />
			<MissionBody />
		</div>
  )
}

export default MissionPage