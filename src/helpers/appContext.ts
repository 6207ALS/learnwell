import { createContext } from "react"

export default createContext<AppContext>({
	user: {
		isLoggedIn: false,
    userID: undefined,
	},
	setUser: () => {},
	handleLogin: () => {},
	handleLogout: () => {}
});