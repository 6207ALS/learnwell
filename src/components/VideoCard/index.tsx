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


function VideoCard({ video, canEdit, handleClickEditVideo }: VideoCardProps) {
	const navigate = useNavigate();

	const handleClickVideoCard = () => {
		navigate(`/${video.user_id}/videos/${video.id}`);
	}

	const handleClickEditOverlay = () => {
		handleClickEditVideo(video);
	}

	return (
		<div className="video-card_container">
			<div 
				className="video-card"
				onClick={handleClickVideoCard}>
				<div className="video-card-thumbnail_container">
				</div>
				<div className="video-card-description_container">
					<h2>{video.title}</h2>
					<p>{uploadDate(video.created_at)}</p>
				</div>
			</div>
			{
				canEdit ?
					<div
						className="video-card-edit_overlay"
						onClick={handleClickEditOverlay} >
						<p>Edit Video</p>
					</div> : null
			}
		</div>
	)
}

export default VideoCard