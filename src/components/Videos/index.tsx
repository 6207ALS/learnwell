import { memo, useContext } from "react"
import { useParams } from "react-router-dom"
import AppContext from "../../helpers/appContext"; 
import "./styles.css"
import VideoCard from "../VideoCard"
import AnimatedComponent from "../AnimatedComponent";

// List of searched user's videos
const Videos = memo(({ videos, handleClickEditVideo }: VideosProps) => {
	const { user } = useContext(AppContext);
  const { user_id: searchedUserID } = useParams();
	const canEdit = searchedUserID === user.userID

	return (
		<AnimatedComponent>
			<div id="videos_container">
				<div id="video-cards_container">
					{
						videos.map(video => (<VideoCard 
							key={video.id} 
							video={video}
							canEdit={canEdit}
							handleClickEditVideo={handleClickEditVideo}
						/>)) 
					}
				</div>
			</div>
		</AnimatedComponent>
	)
})

export default Videos