
import { useEffect, useContext } from "react"
import { useNavigate, Navigate, useLocation  } from "react-router-dom"
import AnimatedOutlet from "../AnimatedOutlet"
import AppContext from "../../helpers/appContext"

function PrivateRoute() {
	const navigate = useNavigate();
	const location = useLocation();
	const { user } = useContext(AppContext);

	useEffect(() => {
		if (!user.isLoggedIn) {
			navigate("/signin", { state: { from: location.pathname } });
		}
	}, [user.isLoggedIn, navigate, location.pathname]);

	return user.isLoggedIn ? <AnimatedOutlet /> : null;
}

export default PrivateRoute