import { useReducer } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import isUserLoggedIn from "../../helpers/isUserLoggedIn"
import getUserID from "../../helpers/getUserID"
import userReducer from "../../reducers/userReducer"
import videosReducer from "../../reducers/userReducer"
import appContext from "../../helpers/appContext"

function AppContext({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [ user, setUser ] = useReducer(
    userReducer, 
    { 
      isLoggedIn: isUserLoggedIn(),
      userID: getUserID(),
      videos: []
    }
  )

  const handleLogin = (userID: string) => {
    const destination = location?.state?.from?.replace(":user_id", userID) || "/";
		console.log(destination)
    localStorage.setItem("user_id", userID);
    setUser({ type: "login", userID })
    navigate(destination)
  }

  const handleLogout = () => {
    localStorage.removeItem("user_id");
    setUser({ type: "logout" })
		navigate("/", { replace: false })
  }

  const appContextValue: AppContext = {
    user,
    setUser,
    handleLogin,
    handleLogout
  }

  return (
    <appContext.Provider value={appContextValue}>
      { children }
    </appContext.Provider>
  )
}

export default AppContext