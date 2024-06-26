import { useState, useEffect, useReducer } from "react";
import { useParams } from 'react-router-dom';
import AnimatedComponent from '../AnimatedComponent'
import videoService from "../../services/videoService"
import EditVideoModal from "../EditVideoModal";
import PostVideoModal from "../PostVideoModal";

import Notification from "../Notification"
import PrivateHeader from "../PrivateHeader"
import VideosPageSubheader from "../VideoPageSubheader"
import Videos from "../Videos"

import { editModalReducer, initialEditModalState } from "../../reducers/editModalReducer"
import { postModalReducer, initialPostModalState } from "../../reducers/postModalReducer"

function VideosPage() {
  const { user_id: searchedUserID } = useParams();
  const [ notification, setNotification ] = useState<string>("");
  const [ videos, setVideos ] = useState<VideoObject[]>([]);

	const [ editModal, dispatchEditModal ] = useReducer(editModalReducer, initialEditModalState)
	const [ postModal, dispatchPostModal ] = useReducer(postModalReducer, initialPostModalState)

  const handleEditVideo = async (videoData: EditVideo) => {
    try {
      await videoService.editUserVideo(videoData);
      setNotification("Success: Saved changes to video");
			dispatchEditModal({ type: "invisible" })
    } catch (e: unknown) {
      if (e instanceof Error) {
        setNotification(`Error: ${e.message}`);
      }
    }
  }

	const handlePostVideo = async (videoData: CreateVideo) => {
    try {
      await videoService.createUserVideo(videoData);
      setNotification("Success: Uploaded video");
			dispatchPostModal({ type: "invisible"})
    } catch (e: unknown) {
      if (e instanceof Error) {
        setNotification(`Error: ${e.message}`);
      }
    }
  }

	const handleClickEditVideo = (video: VideoObject) => {
		dispatchEditModal({ type: "visible", video })
	}

	const handleClickUploadVideo = () => {
		dispatchPostModal({ type: "visible" })
	}

  useEffect(() => {
    (async () => {
      try {
        const returnedVideos = await videoService.getUserVideos(searchedUserID || "");
        setVideos(returnedVideos ? returnedVideos : []);
      } catch (e: unknown) {
        if (e instanceof Error) {
          setNotification(e.message);
        }
      }
    })();
  }, [searchedUserID, postModal.isVisible, editModal.isVisible])

  return (
    <AnimatedComponent>
      <div id="videos-page_container">
        { notification ? <Notification notification={notification} /> : null }
        <PrivateHeader />
				<VideosPageSubheader 
					handleClickUploadVideo={handleClickUploadVideo}
				/>
        <Videos 
					videos={videos} 
					handleClickEditVideo={handleClickEditVideo}
				/>
				<EditVideoModal
					editModal={editModal}
					handleEditVideo={handleEditVideo}
					dispatchEditModal={dispatchEditModal}
				/>
				<PostVideoModal 
					postModal={postModal}
					handlePostVideo={handlePostVideo}
					dispatchPostModal={dispatchPostModal}
				/>
      </div>
    </AnimatedComponent>
  )
}

export default VideosPage