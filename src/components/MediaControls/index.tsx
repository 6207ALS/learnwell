import { useState, useEffect, useRef } from "react";

import playButton from "../../assets/media-controls/play-button.svg";
import pauseButton from "../../assets/media-controls/pause-button.svg";
import volumeButton from "../../assets/media-controls/volume-button.svg";
import fullscreenButton from "../../assets/media-controls/fullscreen-button.svg";
import SpeedListItem from "../SpeedListItem";

import "./styles.css"

const formatTime = (numInSeconds: number): string => {
	const minutes = Math.floor(numInSeconds / 60)
	const seconds = Math.floor(numInSeconds % 60)

	const formattedMinutes = String(minutes).padStart(2, "0");
	const formattedSeconds = String(seconds).padStart(2, "0");

	return `${formattedMinutes}:${formattedSeconds}`
}

// Media controls for video player
function MediaControls({ 
	videoRef, 
	isPlaying, 
	handleTogglePlay, 
	handleToggleFullScreen 
	}: MediaControlsProps) {
	const totalDurationBar = useRef<HTMLDivElement>(null);
	const progressBar = useRef<HTMLDivElement>(null);
	
	const totalVolumeBar = useRef<HTMLDivElement>(null);
	const currentVolumeBar = useRef<HTMLDivElement>(null);
	
	const [ playbackSpeed, setPlaybackSpeed ] = useState(1);
	const [ currentTime, setCurrentTime ] = useState("0:00");
	
	// Updates progress bar for video, based on current time
	useEffect(() => {
		const updateProgressBar = () => {
			if (!videoRef.current) return;
			const totalTime = videoRef.current.duration;
			const currentTime = videoRef.current.currentTime;
			
			if (progressBar.current) {
				progressBar.current.style.width = `${(currentTime / totalTime) * 100}%`
			}
			setCurrentTime(formatTime(videoRef.current.currentTime))
		}

		let update: number; 
		if (isPlaying) {
			update = setInterval(updateProgressBar, 30);
		} 

		return () => { if (update) clearInterval(update) }
	}, [isPlaying, videoRef])

	
	// Set video's playback speed to selected option
	const handleSetPlaybackSpeed = (speed: number) => {
		if (!videoRef.current) return;
		setPlaybackSpeed(speed)
		videoRef.current.playbackRate = speed;
	}

	// Sets video's current time based on where the user clicked on the progress bar
	const handleClickProgressBar = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!totalDurationBar.current || !videoRef.current) return;
		const totalTime = videoRef.current.duration;
		if (e.target instanceof HTMLDivElement && progressBar.current) {
			const progressBarContainer = e.target.getBoundingClientRect();
			const distanceFromStart = e.clientX - progressBarContainer.left;
			const totalDurationBarWidth = totalDurationBar.current.getBoundingClientRect().width;
			
			const percentage = ((distanceFromStart / totalDurationBarWidth * 100));
			progressBar.current.style.width = `${percentage}%`;
			const newTime = (percentage / 100) * totalTime;
			videoRef.current.currentTime = newTime;
		}
	}

	// Sets video's current volume based on where the user clicked on the volume bar
	const handleClickVolumeBar = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!(
			totalVolumeBar.current && 
			currentVolumeBar.current && 
			videoRef.current
		)) return;

		if (e.target instanceof HTMLDivElement ) {
			const volumeBarContainer = totalVolumeBar.current.getBoundingClientRect();
			const volumeBarContainerWidth = volumeBarContainer.width
			const distanceFromStart = e.clientX - volumeBarContainer.left;
			
			const percentage = ((distanceFromStart / volumeBarContainerWidth * 100));
			currentVolumeBar.current.style.width = `${percentage}%`;
			const newVolume = (percentage / 100);
			videoRef.current.volume = newVolume;
			if (newVolume > 0) { unmute() }
			if (newVolume === 0) { mute() }
		}
	}

	// Return total duration of video
	const getTotalTime = () => {
		if (!videoRef.current) return;

		return videoRef.current.duration;
	}

	const unmute = () => {
		if (!videoRef.current) return;
		videoRef.current.muted = false;
	}

	const toggleMute = () => {
		if (!videoRef.current) return;
		videoRef.current.muted = !(videoRef.current.muted);
	}

	const mute = () => {
		if (!videoRef.current) return;
		videoRef.current.muted = true;
	}

	return (
		<div id="media-controls_container">
			<div 
				onClick={handleClickProgressBar}
				id="progress_container">
				<div id="total-duration-bar" ref={totalDurationBar}></div>
				<div id="progress-bar" ref={progressBar}></div>
			</div>
			<div id="controls_container">
				<div id="controls-left_container">
					<div
						onClick={handleTogglePlay}
						id="play_container">
						<img src={isPlaying ? pauseButton : playButton} />
					</div>
					<div id="volume_container">
						<img 
							onClick={() => { toggleMute() }}
							src={volumeButton} />
						<div id="volume-bar_wrapper">
							<div 
								id="volume-bar"
								ref={totalVolumeBar}
								onClick={handleClickVolumeBar}>
								<div id="volume-total"></div>
								<div 
									id="volume-current"
									ref={currentVolumeBar}>
								</div>
							</div>
						</div>
					</div>
					<div id="time_container">
						<span className="media-time">{currentTime}</span>
						<span>/</span>
						<span className="media-time">{formatTime(getTotalTime() || 0)}</span>
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
											handleSetPlaybackSpeed={handleSetPlaybackSpeed}
											speed={speed} 
										/>
									))
								}
							</div>
						</div>
						<div 
							id="current-playback_wrapper">
							<p id="current-playback-speed">{playbackSpeed} x</p>
						</div>
					</div>

					<div 
						id="fullscreen_container"
						onClick={handleToggleFullScreen}>
						<img src={fullscreenButton} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default MediaControls;