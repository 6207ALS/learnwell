import { useState, useEffect, useContext } from "react"
import AppContext from "../../helpers/appContext"
import "./styles.css"

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
	

	// Form values must be different from original value AND
	// neither of the form entries should be empty
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
				id="edit-video-modal_container"
				className={postModal.isVisible ? "visible" : ""}>
				<div id="edit-video-modal">
					<h1>Upload a Video</h1>
					<form
						id="edit-video_form"
						onSubmit={handleSubmitPostVideo}>
						<div className="edit-video-input_container">
							<label 
								id="edit-title_label" 
								htmlFor="">Title:</label>
							<input
								type="text"
								onChange={handleTitleChange}
								value={postVideoTitle}
							/>
						</div>

						<div className="edit-video-input_container">
							<label 
								id="edit-description_label" 
								htmlFor="">Description:</label>
							<textarea
								onChange={handleDescriptionChange}
								value={postVideoDescription}
							/>
						</div>

						<div className="edit-video-input_container">
							<label 
								id="edit-url_label" 
								htmlFor="">Video URL:</label>
							<input
								type="text"
								onChange={handleUrlChange}
								value={postVideoUrl}
							/>
						</div>

						<div id="edit-video-buttons_container">
							<button
								className="edit-video_button"
								type="button"
								onClick={handleClickCancelButton}
							>Cancel</button>
							<button
								className="edit-video_button" 
								type="submit"
								disabled={validateForm()}
							>Save Changes</button>
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