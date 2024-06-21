import "./styles.css"

// List option for media controls playback speed
function SpeedListItem({ speed, handleSetPlaybackSpeed }: SpeedListItemProps) {
	const onClickSpeed = () => {
		handleSetPlaybackSpeed(speed);
	}

	return (
		<p onClick={onClickSpeed} className="speed-list-option">{speed}</p>
	)
}

export default SpeedListItem