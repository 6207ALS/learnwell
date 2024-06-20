import { useContext } from "react"
import { useParams } from "react-router-dom"
import AppContext from "../../helpers/appContext" 
import "./styles.css"

function VideoPageSubheader({ handleClickUploadVideo }) {
	const { user } = useContext(AppContext);
	const { user_id: searchedUserID } = useParams();
	const searchedUserName = searchedUserID?.split("_").join(" ")
	const canUpload = searchedUserID === user.userID

	const handleOnClick = () => {
		handleClickUploadVideo();
	}

	return (
		<div id="video-page-subheader">
			<h1>{searchedUserName}'s Videos:</h1>
			{ 
				canUpload ? 
					<button
						id="video-page-subheader-upload_button"
						onClick={handleOnClick}
					>Upload</button> : null 
			}
		</div>
	)
}

export default VideoPageSubheader