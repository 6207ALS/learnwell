import { useState, useContext, useEffect } from "react";
import { useParams } from 'react-router-dom';
import AnimatedComponent from '../AnimatedComponent'
import videoService from "../../services/videoService"
import commentService from "../../services/commentService";

import AppContext from "../../helpers/appContext"
import PrivateHeader from "../PrivateHeader";
import VideoPlayer from "../VideoPlayer"
import VideoDescription from "../VideoDescription"
import PostCommentForm from "../PostCommentForm"
import Comments from "../Comments"
import Notification from "../Notification";

function VideoPage() {
  const { user } = useContext(AppContext);
  const { video_id } = useParams();
  const [ notification, setNotification ] = useState<string>("");
  const [ video, setVideo ] = useState<VideoObject>();
  const [ comments, setComments ] = useState<CommentObject[]>([]);

  const handleCreateComment = async (content: string) => {
    try {
      if (!user.userID) throw new Error("Error: Not signed in");
      if (!video_id) throw new Error("Error: Missing Video ID");

      const commentData = {
        video_id,
        content,
        user_id: user.userID
      }
  
      await commentService.createVideoComment(commentData)
      setNotification("Success: Posted comment.")
    } catch (e: unknown) {
      if (e instanceof Error) {
        setNotification(`Error: ${e.message}`)
      }
    }
  }

  useEffect(() => {
    (async () => {
      try {
        const [ video, comments ] = await Promise.all([
          videoService.getSingleVideo(video_id || ""),
          commentService.getVideoComments(video_id || "")
        ])
        setVideo(video ? video : undefined);
        setComments(comments ? comments : [])
      } catch (e: unknown) {
        if (e instanceof Error) {
          setNotification(`Error: ${e.message}`)
        }
      }
    })();
  }, [video_id, comments])

  return video ? (
    <AnimatedComponent>
      <div id="video-page_container">
        { notification ? <Notification notification={notification} /> : null }
        <PrivateHeader />
        <VideoPlayer video={video} />
        <VideoDescription video={video} />
        <PostCommentForm handleCreateComment={handleCreateComment} />
        <Comments comments={comments} />
      </div>
    </AnimatedComponent>
  ) : null;
}

export default VideoPage