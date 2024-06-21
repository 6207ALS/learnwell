import { createContext } from "react"

// Initial context for app
export default createContext<AppContext>({
	user: {
		isLoggedIn: false,
    userID: undefined,
	},
	setUser: () => {},
	handleLogin: () => {},
	handleLogout: () => {}
});