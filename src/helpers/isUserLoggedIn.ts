function isUserLoggedIn() {
	return !!(localStorage.getItem("user_id"));
}

export default isUserLoggedIn;