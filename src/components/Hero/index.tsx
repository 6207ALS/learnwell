import { useContext } from "react"
import appContext from "../../helpers/appContext"
import { Link } from "react-router-dom"
import "./styles.css"

function Hero() {
  const { user } = useContext(appContext);
  const { userID } = user;

  return (
    <div id="hero_container">
      <div id="hero-text_container">
        <h1>Learn and Excel.</h1>
        <h2>Transform your education with media.</h2>
      </div>
      <div id="hero-buttons_container">
        <Link to="/about" className="hero_button">Learn More</Link>	
        {userID ? (
          <Link 
            to={`/${userID}/videos`} 
            className="hero_button"
          >Watch Videos</Link>
        ) : (
          <Link 
            to="/signin" 
            className="hero_button"
            state={{ from: "/:user_id/videos" }}
          >Watch Videos</Link>
        )}
      </div>
    </div>
  )
}

export default Hero