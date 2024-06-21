// Retrieve user's ID (user_id) from local storage
function getUserID() {
	return localStorage.getItem("user_id") || undefined;
}

export default getUserID;