import { memo, useState, useEffect, useContext } from "react"
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
import commentService from "../../videoService"
import Comment from "../Comment"

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