import { useState, useEffect } from 'react'
import AnimatedComponent from '../AnimatedComponent'
import { Link, Navigate } from 'react-router-dom'


function VideosPage() {
  return (
		<AnimatedComponent>
			<div id="videos-page_container">
			<Link to='/videos/2'><h1>Video</h1></Link>
			</div>
		</AnimatedComponent>
  )
}

export default VideosPage