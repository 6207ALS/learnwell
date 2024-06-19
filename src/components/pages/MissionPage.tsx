import MissionBanner from "../MissionBanner"
import MissionBody from "../MissionBody"

import AnimatedComponent from '../AnimatedComponent'

function MissionPage() {
  return (
		<AnimatedComponent>
			<div id="mission-page_container">
				<MissionBanner />
				<MissionBody />
			</div>
		</AnimatedComponent>
  )
}

export default MissionPage