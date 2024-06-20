import { useState, useContext, useEffect, useReducer } from "react";
import { useParams } from 'react-router-dom';
import AnimatedComponent from '../AnimatedComponent'
import AppContext from "../../helpers/appContext"
import videoService from "../../services/videoService"
import EditVideoModal from "../EditVideoModal";

import Notification from "../Notification"
import PrivateHeader from "../PrivateHeader"
import Videos from "../Videos"

interface VisibleEditModalState {
	isVisible: true;
	selectedVideo: VideoObject;
}

interface InvisibleEditModalState {
	isVisible: false;
}

type EditModalState = VisibleEditModalState | InvisibleEditModalState;

interface VisibleEditModalAction {
	type: "visible";
	video: VideoObject;
}

interface InvisibleEditModalAction {
	type: "invisible";
}

type EditModalAction = VisibleEditModalAction | InvisibleEditModalAction;

function editModalReducer(state: EditModalState, action: EditModalAction): EditModalState {
	switch (action.type) {
		case "visible": {
			return {
				...state,
				isVisible: true,
				selectedVideo: action.video,
			}
		}

		case "invisible": {
			return {
				...state,
				isVisible: false,
			}
		}
	} 
}

const initialModalState: InvisibleEditModalState = {
	isVisible: false
}


function VideosPage() {
  const { user_id: searchedUserID } = useParams();
  const [ notification, setNotification ] = useState<string>("");
  const [ videos, setVideos ] = useState<VideoObject[]>([]);

	const [ editModal, dispatchEditModal ] = useReducer(editModalReducer, initialModalState)

  const notifyUser = (message: string): void => {
    setNotification(message);
    setTimeout(() => { setNotification("") }, 5000)
  }

  const handleEditVideo = async (videoData: EditVideo) => {
    try {
      await videoService.editUserVideo(videoData);
      notifyUser("Success: Saved Changes to Video");
			dispatchEditModal({ type: "invisible"})
    } catch (e: unknown) {
      if (e instanceof Error) {
        notifyUser(e.message);
      }
    }
  }

	const handleClickEditVideo = (video: VideoObject) => {
		dispatchEditModal({ type: "visible", video })
	}

  useEffect(() => {
    (async () => {
      try {
        const returnedVideos = await videoService.getUserVideos(searchedUserID || "");
        setVideos(returnedVideos ? returnedVideos : []);
      } catch (e: unknown) {
        if (e instanceof Error) {
          notifyUser(e.message);
        }
      }
    })();
  }, [searchedUserID])

  return (
    <AnimatedComponent>
      <div id="videos-page_container">
        <Notification notification={notification} />
        <PrivateHeader />
        <Videos 
					videos={videos} 
					handleClickEditVideo={handleClickEditVideo}
				/>
				{
					editModal.isVisible ? 
						<EditVideoModal
							video={editModal.selectedVideo}
							handleEditVideo={handleEditVideo}
							dispatchEditModal={dispatchEditModal}
						/> : null
				}
      </div>
    </AnimatedComponent>
  )
}

export default VideosPage