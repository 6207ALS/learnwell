import { useState, useContext, useEffect } from "react";
import { useParams } from 'react-router-dom';
import AnimatedComponent from '../AnimatedComponent'
import videoService from "../../services/videoService"
import commentService from "../../services/commentService";

import PrivateHeader from "../PrivateHeader";
import VideoPlayer from "../VideoPlayer"
import VideoDescription from "../VideoDescription"
import PostCommentForm from "../PostCommentForm"
import Comments from "../Comments"

function VideoPage() {
  const { video_id } = useParams();
  const [ notification, setNotification ] = useState<string>("");
  const [ video, setVideo ] = useState<VideoObject>();
  const [ comments, setComments ] = useState<CommentObject[]>([]);

  const handleCreateComment = (commentContent: string) => {

  }

  const notifyUser = (message: string) => {
    setNotification(message);
    setTimeout(() => { setNotification("") }, 5000)
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
        if (e instanceof Error) notifyUser(e.message);
      }
    })();
  }, [video_id])

  return video ? (
    <AnimatedComponent>
      <div id="video-page_container">
        <PrivateHeader notification={notification} />
        <VideoPlayer video={video} />
        <VideoDescription video={video} />
        <PostCommentForm handleCreateComment={handleCreateComment} />
        <Comments comments={comments} />
      </div>
    </AnimatedComponent>
  ) : null;
}

export default VideoPage