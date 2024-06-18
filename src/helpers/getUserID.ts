function getUserID() {
	return localStorage.getItem("user_id") || undefined;
}

export default getUserID;