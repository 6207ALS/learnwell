import './styles.css'

function Notification({ notification }: { notification: string}): JSX.Element {

  return (
		<div id="notification_container">
			<h1>{notification}</h1>
		</div>
  )
}

export default Notification