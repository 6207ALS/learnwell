import playButton from "../../assets/media-controls/play-button.svg";
import pauseButton from "../../assets/media-controls/pause-button.svg";
import volumeButton from "../../assets/media-controls/volume-button.svg";
import fullscreenButton from "../../assets/media-controls/fullscreen-button.svg";
import SpeedListItem from "../SpeedListItem";

import "./styles.css"



function MediaControls() {
	const currentPlaybackSpeed = 1;
	const isPlaying = true;
	const [currentTime, totalTime] = ["3:00", "4:00"]

	return (
		<div id="media-controls_container">
			<div id="bar_container"></div>
			<div id="controls_container">
				<div id="controls-left_container">
					<div id="play_container">
						<img src={isPlaying ? pauseButton : playButton} />
					</div>
					<div id="volume_container">
						<img src={volumeButton} />
						<div id="volume-bar_wrapper">
							<div id="volume-bar">
								<div id="volume-total"></div>
								<div id="volume-current"></div>
							</div>
						</div>
					</div>
					<div id="time_container">
						<span className="media-time">{currentTime}</span>/<span className="media-time">{totalTime}</span>
					</div>
				</div>

				<div id="controls-right_container">
					<div id="speed_container">
						<div id="playback-list_wrapper">
							<div id="playback-list_container">
								{
									[0.25, 0.5, 1, 1.5, 2].map(speed => (
										<SpeedListItem 
											key={`speed-list-item-${speed}`} 
											speed={speed} 
										/>
									))
								}
							</div>
						</div>
						<div id="current-playback_wrapper">
							<p id="current-playback-speed">{currentPlaybackSpeed} x</p>
						</div>
					</div>

					<div id="fullscreen_container">
						<img src={fullscreenButton} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default MediaControls;