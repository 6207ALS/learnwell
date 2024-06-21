import "./styles.css"
import parseDate from "../../helpers/parseDate"

// A single comment from a video
const Comment = ({ comment }: { comment: CommentObject }) => {
	return (
		<div className="video-comment_container">
			<div className="video-comment-profile-icon"></div>
			<div className="video-comment-content_container">
				<div className="video-comment-header_container">
					<p className="video-comment-username">{comment.user_id}</p>
					<p className="video-comment-date">{parseDate(comment.created_at)}</p>
				</div>
				<p className="video-comment-content">{comment.content}</p>
			</div>
		</div>
	)
}

export default Comment