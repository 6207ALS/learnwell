function userReducer(state: UserState, action: UserAction): UserState {
	switch (action.type) {
		case "login": {
			return { isLoggedIn: true, userID: action.userID ? action.userID : undefined }
		}
		case "logout": {
			return { isLoggedIn: false, userID: undefined }
		}
		default: {
			return { ...state }	
		}
	}
}

export default userReducer