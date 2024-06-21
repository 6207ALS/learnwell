// Reducer function to manage PostVideoModal component's state
const postModalReducer: PostModalReducer = (state, action) => {
	switch (action.type) {
		case "visible": {
			return {
				...state,
				isVisible: true,
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

const initialPostModalState: PostModalState = {
	isVisible: false,
}

export {
	initialPostModalState,
	postModalReducer,
}