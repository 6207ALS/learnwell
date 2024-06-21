
import { useEffect, useContext } from "react"
import { useNavigate, useLocation  } from "react-router-dom"
import AnimatedOutlet from "../AnimatedOutlet"
import AppContext from "../../helpers/appContext"
import AnimatedComponent from "../AnimatedComponent"

// If user is signed in, render the child Route component
// Else, navigate to route /signin (remembering requested route)
function PrivateRoute() {
	const navigate = useNavigate();
	const location = useLocation();
	const { user } = useContext(AppContext);

	useEffect(() => {
		if (!user.isLoggedIn && location.pathname !== "/signin") {
			navigate("/signin", { state: { from: location.pathname } });
		}
	}, [user.isLoggedIn, navigate, location.pathname]);

	return (
		user.isLoggedIn ?
			<AnimatedComponent>
				<AnimatedOutlet />
			</AnimatedComponent> : 
			null
	);
}

export default PrivateRoute