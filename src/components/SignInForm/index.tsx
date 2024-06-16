import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./styles.css"

interface SignInFormProps {
	originalPath?: string
}

function SignInForm({ originalPath }: SignInFormProps) {
	const navigate = useNavigate();
	const [ firstName, setFirstName ] = useState("");
	const [ lastName, setLastName ] = useState("");

	const validateForm = () => {
		return !(firstName.trim() && lastName.trim());
	}

	const handleSubmitForm = (e: React.FormEvent) => {
		e.preventDefault();

		const user_id = [firstName, lastName].join("_");
		localStorage.setItem("user_id", user_id);

		
	}

	const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFirstName(e.currentTarget.value);
	}

	const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setLastName(e.currentTarget.value);
	}

  return (
		<form id="sign-in_form" onSubmit={handleSubmitForm}>
			<div className="sign-in-input_container">
				<label htmlFor="first-name_input">First Name:</label>
				<input 
					id="first-name_input" 
					type="text" 
					onChange={handleFirstNameChange}
					value={firstName}
				/>
			</div>

			<div className="sign-in-input_container">
				<label htmlFor="last-name_input">Last Name:</label>
				<input 
					id="last-name_input" 
					type="text" 
					onChange={handleLastNameChange}
					value={lastName}
				/>
			</div>

			<button 
				id="sign-in_button"
				type="submit"
				disabled={validateForm()}
			>Sign In</button>
		</form>
  )
}

export default SignInForm