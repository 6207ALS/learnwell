import { useState, useEffect, useContext } from "react"
import { useNavigate, useLocation, Link, Navigate } from "react-router-dom"
import AppContext from "../../helpers/appContext"; 
import "./styles.css"


function SignInForm() {
  const { handleLogin } = useContext(AppContext);

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

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  }

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  }

  return (
    <form id="signin_form" onSubmit={handleSubmitForm}>
      <input
        className="signin_input"
        id="first-name_input" 
        type="text" 
        onChange={handleFirstNameChange}
        value={firstName}
        placeholder={"First Name"}
      />

      <input 
        className="signin_input"
        id="last-name_input" 
        type="text" 
        onChange={handleLastNameChange}
        value={lastName}
        placeholder={"Last Name"}
      />

      <div id="signin-buttons_container">
        <Link to="/" className="signin_button">Cancel</Link>

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