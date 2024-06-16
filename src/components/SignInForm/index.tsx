import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import "./styles.css"

interface SignInFormProps {
	originalPath?: string
	handleLogin: (userID: string) => void
}

function SignInForm({ originalPath, handleLogin }: SignInFormProps) {
	const navigate = useNavigate();
	const [ firstName, setFirstName ] = useState("");
	const [ lastName, setLastName ] = useState("");

	const validateForm = () => {
		return !(firstName.trim() && lastName.trim());
	}

	const handleSubmitForm = (e: React.FormEvent) => {
		e.preventDefault();

		const userID = [firstName, lastName].join("_");
		handleLogin(userID);
	}

	const handleClickLeave = () => {
		navigate("/")
	}

	const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value)
		setFirstName(e.target.value);
	}

	const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setLastName(e.target.value);
	}

  return (
		<form id="signin_form" onSubmit={handleSubmitForm}>
			{/* <label htmlFor="first-name_input">First Name:</label> */}
			<input
				className="signin_input"
				id="first-name_input" 
				type="text" 
				onChange={handleFirstNameChange}
				value={firstName}
				placeholder={"First Name"}
			/>

			{/* <label htmlFor="last-name_input">Last Name:</label> */}
			<input 
				className="signin_input"
				id="last-name_input" 
				type="text" 
				onChange={handleLastNameChange}
				value={lastName}
				placeholder={"Last Name"}
			/>

			<div id="signin-buttons_container">
				<Link to="/"className="signin_button">Cancel</Link>

				<button 
					className="signin_button"
					type="submit"
					disabled={validateForm()}
				>Sign In</button>
			</div>

		</form>
  )
}

export default SignInForm