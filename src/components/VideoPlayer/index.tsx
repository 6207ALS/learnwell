import { memo, useState, useRef } from "react";
import MediaControls from "../MediaControls";

import "./styles.css"

const VideoPlayer = memo(({ video }: { video: VideoObject }) => {
	const videoContainerRef = useRef<HTMLDivElement>(null);
	const [ isVideoLoaded, setIsVideoLoaded ] = useState(false);
	const [ isPlaying, setIsPlaying ] = useState(true);
	const [ isFullScreen, setIsFullScreen ] = useState(false);
	const videoRef = useRef<HTMLVideoElement>(null);

	// Play/Pause video
	const handleTogglePlay = () => {
		const updatedState = !isPlaying;
		setIsPlaying(updatedState)
		if (videoRef.current) {
			if (isPlaying) {
				videoRef.current.pause();
			} else {
				videoRef.current.play();
			}
		}
	}

	// Enter/Exit full screen mode
	const handleToggleFullScreen = () => {
		if (!(videoContainerRef.current)) return;
		if (isFullScreen) {
			if (document.exitFullscreen) document.exitFullscreen();
		} else {
			if (videoContainerRef.current && videoContainerRef.current.requestFullscreen) {
				videoContainerRef.current.requestFullscreen();
			}
		}
		setIsFullScreen(prev => !prev);
	}


	return (
		<div 
			id="video-player_container"
			ref={videoContainerRef}>
			<video
				autoPlay
				muted
				ref={videoRef} 
				src={video.video_url}
				onClick={handleTogglePlay}
				controls={false}
				onLoadedData={() => setIsVideoLoaded(true)}
			></video>
			{ 
				isVideoLoaded ? 
					<MediaControls 
						videoRef={videoRef}
						isPlaying={isPlaying}
						handleTogglePlay={handleTogglePlay}
						handleToggleFullScreen={handleToggleFullScreen}
					/> : null }
		</div>
	)
});

export default VideoPlayer