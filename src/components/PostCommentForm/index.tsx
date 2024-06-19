import { useState, useEffect, useContext } from "react"
import { useNavigate, useLocation, Link, Navigate } from "react-router-dom"
import AppContext from "../../helpers/appContext"; 
import "./styles.css"


function PostCommentForm({ handleCreateComment }: PostCommentFormProps) {

  const [ comment, setComment ] = useState("");


  const validateForm = () => {
    return !(comment.trim());
  }

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();

		const commentData = {

		}

    handleCreateComment(commentData);
  }

	const handleCancelComment = () => {
		setComment("");
	}

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  }

  return (
    <form id="post-comment_form" onSubmit={handleSubmitForm}>
      <input
        className="post-comment_input"
        id="comment_input" 
        type="text" 
        onChange={handleCommentChange}
        value={comment}
        placeholder={"Add a comment..."}
      />

      <div id="post-comment-buttons_container">
				<button 
          className="post-comment_button"
          type="button"
					onClick={handleCancelComment}
          disabled={!(comment)}
        >Cancel</button>
        <button 
          className="post-comment_button"
          type="submit"
          disabled={validateForm()}
        >Comment</button>
      </div>

    </form>
  )
}

export default PostCommentForm