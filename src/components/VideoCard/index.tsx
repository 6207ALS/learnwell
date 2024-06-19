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
import uploadDate from "../../helpers/uploadDate"


function VideoCard({ video, canEdit }: { video: VideoObject, canEdit: boolean }) {
	const navigate = useNavigate();

	const handleClickVideoCard = () => {
		navigate(`/${video.user_id}/videos/${video.id}`)
	}

	return (
		<div onClick={handleClickVideoCard} className="video-card_container">
			<div className="video-card-thumbnail_container">
				{
					canEdit ? 
					<div className="video-card-edit_overlay">
						<p>Edit Video</p>
					</div> : 
					null
				}
			</div>
			<div className="video-card-description_container">
				<h2>{video.title}</h2>
				<p>{uploadDate(video.created_at)}</p>
			</div>
		</div>
	)
}

export default VideoCard