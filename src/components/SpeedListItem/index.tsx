import "./styles.css"

function SpeedListItem({ speed, handleSetPlaybackSpeed }) {
	const onClickSpeed = () => {
		handleSetPlaybackSpeed(speed);
	}

	return (
		<p onClick={onClickSpeed} className="speed-list-option">{speed}</p>
	)
}

export default SpeedListItem