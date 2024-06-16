import { useEffect, useReducer } from "react"
import { Link } from "react-router-dom"
import SignInForm from "../SignInForm"

import "./styles.css"

function SignIn() {
	return (
		<div id="signin_container">
			<div id="signin-text_container">
				<h1>To continue, please sign in.</h1>
			</div>
			<SignInForm />
		</div>
	);
}

export default SignIn