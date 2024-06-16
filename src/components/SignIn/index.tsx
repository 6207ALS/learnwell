import SignInText from "../SignInText"
import SignInForm from "../SignInForm"
import "./styles.css"

interface SignInProps {
	handleLogin: (userID: string) => void
}

function SignIn({ handleLogin }: SignInProps) {
  return (
    <div id="signin-page_container">
			<div id="signin_container">
				<SignInText />
				<SignInForm handleLogin={handleLogin}/>
			</div>
    </div>
  )
}

export default SignIn