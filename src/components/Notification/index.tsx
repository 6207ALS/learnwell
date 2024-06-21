import { useState, useEffect } from "react"
import './styles.css'

// Displays component for 3 seconds, then hides
function Notification({ notification }: { notification: string}): JSX.Element {
	const [ isVisible, setIsVisible ] = useState(false)

	useEffect(() => {
		setIsVisible(true)
		setTimeout(() => { setIsVisible(false)}, 3000)
	}, [notification])

  return (
		<div 
			className={ isVisible ? "visible" : ""}
			id="notification_container">
			<h2>{notification}</h2>
		</div>
  )
}

export default Notification