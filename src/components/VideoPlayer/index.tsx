import { memo, useState, useContext, useEffect } from "react";
import MediaControls from "../MediaControls";

import "./styles.css"

const VideoPlayer = memo(() => {
	return (
		<div id="video-player_container">
			<video 
				src={"https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"}
				controls={false}
			></video>
			<MediaControls></MediaControls>
		</div>
	)
});

export default VideoPlayer