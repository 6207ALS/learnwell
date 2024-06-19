import { useState, useEffect, useContext } from "react"
import { 
	useNavigate, 
	useLocation, 
	Link, 
	Navigate,
	useParams
} from "react-router-dom"
import AppContext from "../../helpers/appContext"; 
import "./styles.css"
import parseDate from "../../helpers/parseDate"


function VideoDescription({ video }: { video: VideoObject }) {
	const userName = video.user_id.split("_").join(" ");

	return (
		<div id="video-description_container">
			<div id="video-description-header_container">
				<h1>{video.title}</h1>
				<div id="video-description-profile_container">
					<div id="video-description-profile-icon"></div>
					<h2>{userName}</h2>
				</div>
			</div>
			<div id="video-description-content_container">
				<p>{parseDate(video.created_at)}</p>
				<p>{video.description}</p>
			</div>
		</div>
	)
}

export default VideoDescription