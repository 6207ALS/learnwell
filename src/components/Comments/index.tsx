import { memo } from "react"
import "./styles.css"
import Comment from "../Comment"

// A list of comments for a video
const Comments = memo(({ comments }: { comments: CommentObject[] }) => {
	return (
		<div id="video-comments_container">
			<h2>Comments</h2>
			{
				comments.map(comment => <Comment key={comment.id} comment={comment} />)
			}
		</div>
	)
})

export default Comments