import { useState, useContext, useEffect } from "react";
import { useParams } from 'react-router-dom';
import AnimatedComponent from '../AnimatedComponent'
import AppContext from "../../helpers/appContext"
import videoService from "../../services/videoService"

import PrivateHeader from "../PrivateHeader"
import Videos from "../Videos"

function VideosPage() {
  const { user_id: searchedUserID } = useParams();
  const [ notification, setNotification ] = useState<string>("");
  const [ videos, setVideos ] = useState<VideoObject[]>([]);

  const notifyUser = (message: string): void => {
    setNotification(message);
    setTimeout(() => { setNotification("") }, 5000)
  }

  useEffect(() => {
    (async () => {
      try {
        const returnedVideos = await videoService.getUserVideos(searchedUserID || "");
        console.log(returnedVideos);
        setVideos(returnedVideos ? returnedVideos : []);
      } catch (e: unknown) {
        if (e instanceof Error) {
          
          
        }
      }
    })();
  }, [])

  return (
    <AnimatedComponent>
      <div id="videos-page_container">
        <PrivateHeader notification={notification}/>
        <Videos videos={videos}/>
      </div>
    </AnimatedComponent>
  )
}

export default VideosPage