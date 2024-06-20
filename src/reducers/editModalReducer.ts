const editModalReducer: EditModalReducer = (state, action) => {
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

const initialEditModalState: EditModalState = {
	isVisible: false,
	selectedVideo: {
		created_at: "",
		video_url: "",
		user_id: "",
		description: "",
		title: "",
		num_comments: 0,
		id: "",
	}
}

export {
	initialEditModalState,
	editModalReducer,
}