
import { Navigate, useLocation  } from "react-router-dom"
import AnimatedOutlet from "../AnimatedOutlet"


function PrivateRoute() {
	const location = useLocation();
	const isLoggedIn = localStorage.getItem("user_id");

	if (isLoggedIn) {
		location
	}

	return (
		isLoggedIn ? 
			<AnimatedOutlet/> : 
			<Navigate 
				to="/login"
				options={{
					
				}}
			/>
	)
}

export default PrivateRoute