import { useState } from 'react'

import {
  Route, 
  Routes,
} from "react-router-dom"

import { 
  HomePage,
  VideoPage,
  VideosPage,
  AboutPage,
  MissionPage,
  ContactPage,
  SignInPage
} from "./components/pages"

import BlobsLayout from "./components/BlobsLayout"
import AppLayout from "./components/AppLayout"
import PrivateRoute from './components/PrivateRoute'
import isUserLoggedIn from "./helpers/isUserLoggedIn"


import "./App.css"
import "./reset.css"

function App() {
  const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(isUserLoggedIn());
  const [ userID, setUserID ] = useState<string | undefined>(undefined);

  const handleLogin = (userID: string) => {
    localStorage.setItem("user_id", userID);
    setUserID(userID)
    setIsLoggedIn(true);
  }

  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route element={<BlobsLayout />}>
          <Route index path="/" element={<HomePage userID={userID}/>}/>
          <Route path="/about" element={<AboutPage />}/>
          <Route path="/mission" element={<MissionPage />}/>
          <Route path="/contact" element={<ContactPage />}/>
          <Route path="/signin" element={<SignInPage handleLogin={handleLogin}/>}/>
        </Route>
        <Route element={<PrivateRoute isAuthenticated={isLoggedIn}/>}>
          <Route path={`/${userID}/videos`} element={<VideosPage />}/>
          <Route path={`/${userID}/videos/:video_id`} element={<VideoPage />}/>
        </Route>
      </Route>
    </Routes>
  )
}

export default App