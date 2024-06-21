import { useState, useContext } from "react"
import AppContext from "../../helpers/appContext"
import "./styles.css"

// Modal to edit a user's video
function PostVideoModal({
	handlePostVideo,
	dispatchPostModal,
	postModal,
}: PostVideoModalProps) {
	const [ postVideoTitle, setPostVideoTitle ] = useState<string>("")
	const [ postVideoDescription, setPostVideoDescription ] = useState<string>("")
	const [ postVideoUrl, setPostVideoUrl ] = useState<string>("")
	const { user } = useContext(AppContext);

	const handleSubmitPostVideo = (e: React.FormEvent) => {
		e.preventDefault();
		if (!user.userID) return;

		const videoData: CreateVideo = {
			user_id: user.userID,
			title: postVideoTitle,
			video_url: postVideoUrl,
			description: postVideoDescription
		}

		handlePostVideo(videoData);
	}

	const handleClickModalOverlay = () => {
		dispatchPostModal({ type: "invisible" })
	}

	const handleClickCancelButton = () => {
		dispatchPostModal({ type: "invisible" })
	}

	const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPostVideoTitle(e.target.value)
	}

	const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setPostVideoDescription(e.target.value)
	}

	const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPostVideoUrl(e.target.value)
	}
	
	// Check if all form inputs are not empty
	const validateForm = () => {
		return !(
			postVideoTitle.trim() && 
			postVideoDescription.trim() && 
			postVideoUrl.trim()
		)
	}

	return (
		<>
			<div 
				id="post-video-modal_container"
				className={postModal.isVisible ? "visible" : ""}>
				<div id="post-video-modal">
					<h1>Upload New Video</h1>
					<form
						id="post-video_form"
						onSubmit={handleSubmitPostVideo}>
						<div className="post-video-input_container">
							<label 
								id="post-title_label" 
								htmlFor="">Title:</label>
							<input
								type="text"
								onChange={handleTitleChange}
								value={postVideoTitle}
							/>
						</div>

						<div className="post-video-input_container">
							<label 
								id="post-description_label" 
								htmlFor="">Description:</label>
							<textarea
								onChange={handleDescriptionChange}
								value={postVideoDescription}
							/>
						</div>

						<div className="post-video-input_container">
							<label 
								id="post-url_label" 
								htmlFor="">Video URL:</label>
							<input
								type="text"
								onChange={handleUrlChange}
								value={postVideoUrl}
							/>
						</div>

						<div id="post-video-buttons_container">
							<button
								className="post-video_button"
								type="button"
								onClick={handleClickCancelButton}
							>Cancel</button>
							<button
								className="post-video_button" 
								type="submit"
								disabled={validateForm()}
							>Upload</button>
						</div>

					</form>
				</div>
				<div 
					id="edit-video-modal-overlay"
					onClick={handleClickModalOverlay}
				></div>
			</div>
		</>
	)
}

export default PostVideoModal