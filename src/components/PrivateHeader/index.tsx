import {
  useCallback,
  useRef,
  useState, 
  useEffect, 
  useContext
} from "react"
import { useNavigate, useLocation, Link } from "react-router-dom"
import AppContext from "../../helpers/appContext"; 
import "./styles.css"


function PrivateHeader() {
  const navigate = useNavigate();
  const { user, handleLogout } = useContext(AppContext);
  const [ isProfileModalVisible, setIsProfileModalVisible ] = useState<boolean>(false);
  const [ searchValue, setSearchValue ] = useState("");
  const profileModalRef = useRef(null);

  const userName = user?.userID?.split("_").join(" ") || "N/A";

  const handleClickProfileIcon = () => {
    setIsProfileModalVisible(prev => !prev);
  }

  const handleSearchUser = useCallback((event: KeyboardEvent) => {
    const { activeElement } = document;
    const searchUserInput = event.currentTarget;

    if (event.key === 'Enter' && (activeElement === searchUserInput)) {
      navigate(`/${searchValue}/videos`)
    }
  }, [navigate, searchValue]);

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (isProfileModalVisible) {
      const modalElement = document.querySelector('#private-header-profile_container');
      const iconElement = document.querySelector('#private-header-profile_icon');

      if (event.target instanceof Node) {
        if (
          modalElement && !modalElement.contains(event.target) &&
          iconElement && !iconElement.contains(event.target)
        ) {
          setIsProfileModalVisible(false);
        }
      }
    }
  }, [isProfileModalVisible]);

	const handleClickMyVideos = () => {
		navigate(`/${user.userID}/videos`);
	}

  useEffect(() => {
    const searchInput = document.querySelector("#search-video-bar_input")
    document.addEventListener('mousedown', handleClickOutside);

    if (searchInput instanceof HTMLElement) {
      searchInput.addEventListener('keyup', handleSearchUser);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);

      if (searchInput instanceof HTMLElement) {
        searchInput.removeEventListener('keyup', handleSearchUser);
      }
    };
  }, [handleClickOutside, handleSearchUser]);

  return (
    <div id="private-header_container">
      <input 
        type="text"
        id="search-video-bar_input"
        onChange={handleSearchInputChange}
        value={searchValue}
        placeholder="Search user"
      />
      <div 
        id="private-header-profile_icon"
        onClick={handleClickProfileIcon}
      >
      <div
        id="private-header-profile_container"
        ref={profileModalRef}
        className={ isProfileModalVisible ? "" : "hidden" }>
        <h2 id="private-header-username">Account: {userName}</h2>
        <button 
					id="user-home_button"
					onClick={handleClickMyVideos}
				>My Videos</button>
        <button 
          id="signout_button"
          onClick={handleLogout}
        >Sign out</button>
      </div>
      </div>
    </div>
  )
}

export default PrivateHeader