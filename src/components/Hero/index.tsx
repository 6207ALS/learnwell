import { useEffect, useReducer } from "react"
import { Link } from "react-router-dom"
import "./styles.css"

interface state {
	signedIn: boolean;
	user_id?: string | null;
}

interface action {
	type: "not_signed_in" | "signed_in";
	user_id?: string | null;
}

function reducer(_: state, action: action): state {
	switch (action.type) {
		case "not_signed_in":
			return {
				signedIn: false,
				user_id: undefined
			}
		case "signed_in":
			return {
				signedIn: true,
				user_id: action.user_id
			}
	}
}

function Hero() {
	const [ state, dispatch ] = useReducer(reducer, {
		signedIn: false
	});

	useEffect(() => {
		const user_id = localStorage.getItem("user_id");
		const type = user_id ? "signed_in" : "not_signed_in"

		dispatch({ type, user_id })
	}, []);


  return (
		<div id="hero_container">
			<div id="hero-text_container">
				<h1>Learn and Excel.</h1>
				<h2>Transform your education with media.</h2>
			</div>
			<div id="hero-buttons_container">
				<Link to="/about" className="hero_button">Learn More</Link>	
				<Link 
					to={ state.signedIn ? `/${state.user_id}/videos` : "/signin"} 
					className="hero_button">Watch Videos</Link> :
			</div>
		</div>
  )
}

export default Hero