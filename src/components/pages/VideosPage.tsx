import { useState, useEffect } from 'react'
import AnimatedComponent from '../AnimatedComponent'
import { Link, Navigate } from 'react-router-dom'
import getUserID from "../../helpers/getUserID"


function VideosPage() {
	const userID = getUserID();

  return (
		<AnimatedComponent>
			<div id="videos-page_container">
			<div id="videos-header_container">
				<h2>Signed in as: {userID}</h2>
				<button >Sign out</button>
			</div>
			</div>
		</AnimatedComponent>
  )
}

export default VideosPage