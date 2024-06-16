
import { Navigate, useLocation  } from "react-router-dom"
import AnimatedOutlet from "../AnimatedOutlet"

interface PrivateRouteProps {
	isAuthenticated: boolean;
}

function PrivateRoute({ isAuthenticated }: PrivateRouteProps) {
	return (
		isAuthenticated ? 
			<AnimatedOutlet /> : 
			<Navigate to="/login"/>
	)
}

export default PrivateRoute