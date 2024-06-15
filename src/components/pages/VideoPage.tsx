import { useState } from 'react'
import AnimatedComponent from '../AnimatedComponent'
import { Link } from 'react-router-dom'

function VideoPage() {
  return (
		<AnimatedComponent>
			<div id="video-page_container">
				<Link to='/videos'><h1>Videos</h1></Link>
			</div>
		</AnimatedComponent>
  )
}

export default VideoPage