interface UserAction {
	type: "login" | "logout";
	userID?: string;
}

interface UserState {
	isLoggedIn: boolean;
	userID?: string;
}

interface HeaderProps {
}

interface AppLayoutProps {
}

interface AppContext {
	user: UserState,
	setUser: React.Dispatch<UserAction>
	handleLogout: () => void;
	handleLogin: (userID: string) => void;
}

type UserReducer = (state: UserState, action: UserAction) => UserState