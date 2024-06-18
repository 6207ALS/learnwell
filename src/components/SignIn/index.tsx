import SignInText from "../SignInText"
import SignInForm from "../SignInForm"
import "./styles.css"

function SignIn() {
  return (
    <div id="signin-page_container">
			<div id="signin_container">
				<SignInText />
				<SignInForm />
			</div>
    </div>
  )
}

export default SignIn