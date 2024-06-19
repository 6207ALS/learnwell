function userReducer(state: UserState, action: UserAction): UserState {
	switch (action.type) {
		case "login": {
			return {
				...state,
				isLoggedIn: true, 
				userID: action.userID ? action.userID : undefined,
			}
		}
		case "logout": {
			return {
				...state,
				isLoggedIn: false, 
				userID: undefined, 
			}
		}
		case "set-videos": {
			return {
				...state,
				videos: action.videos ? action.videos : state.videos,
			}
		}
		default: {
			return state;
		}
	}
}

export default userReducer