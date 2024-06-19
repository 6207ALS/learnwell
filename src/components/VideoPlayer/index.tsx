import { memo, useState, useContext, useEffect } from "react";
import { useParams } from 'react-router-dom';
import AnimatedComponent from '../AnimatedComponent'
import AppContext from "../../helpers/appContext"
import videoService from "../../services/videoService"

import PrivateHeader from "../PrivateHeader"
import Videos from "../Videos"
import "./styles.css"

const VideoPlayer = memo(({ video }: { video: VideoObject}) => {
	return (
		<div id="video-player_container">
			<iframe
				src={video ? video.video_url : ""}></iframe>
			{/* <MediaControls></MediaControls> */}
		</div>
	)
});

export default VideoPlayer