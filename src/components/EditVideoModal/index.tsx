import { useState, useEffect } from "react"
import "./styles.css"
import VideoDescription from "../VideoDescription"


function EditVideoModal({
	handleEditVideo,
	dispatchEditModal,
	editModal,
}: EditVideoModalProps) {
	const video = editModal.selectedVideo;
	const [ editVideoTitle, setEditVideoTitle ] = useState<string>(video.title)
	const [ editVideoDescription, setEditVideoDescription ] = useState<string>(video.description)

	useEffect(() => {
		setEditVideoTitle(video.title);
		setEditVideoDescription(video.description);
	}, [video.title, video.description])

	const handleSubmitEditVideo = (e: React.FormEvent) => {
		e.preventDefault();
		const videoData: EditVideo = {
			video_id: video.id,
			title: editVideoTitle,
			description: editVideoDescription
		}

		handleEditVideo(videoData);
	}

	const handleClickModalOverlay = () => {
		dispatchEditModal({ type: "invisible" })
	}

	const handleClickCancelButton = () => {
		dispatchEditModal({ type: "invisible" })
	}

	const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditVideoTitle(e.target.value)
	}

	const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setEditVideoDescription(e.target.value)
	}

	// Form values must be different from original value AND
	// neither of the form entries should be empty
	const validateForm = () => {
		return !(
			editVideoTitle.trim() && 
			editVideoDescription.trim() && 
			(editVideoTitle !== video.title ||
			editVideoDescription !== video.description)
		)
	}

	return (
		<>
			<div 
				id="edit-video-modal_container"
				className={editModal.isVisible ? "visible" : ""}>
				<div id="edit-video-modal">
					<h1>Edit: "{video.title}"</h1>
					<form
						id="edit-video_form"
						onSubmit={handleSubmitEditVideo}>
						<div className="edit-video-input_container">
							<label 
								id="edit-title_label" 
								htmlFor="">Title:</label>
							<input
								type="text"
								onChange={handleTitleChange}
								value={editVideoTitle}
							/>
						</div>

						<div className="edit-video-input_container">
							<label 
								id="edit-description_label" 
								htmlFor="">Description:</label>
							<textarea
								onChange={handleDescriptionChange}
								value={editVideoDescription}
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

export default EditVideoModal