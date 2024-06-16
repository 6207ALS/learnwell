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
import isUserLoggedIn from "./helpers/isUserLoggedIn"

import "./App.css"
import "./reset.css"

function App() {
  const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(isUserLoggedIn());
  const [ userID, setUserID ] = useState<string | null>(null);

  const handleLogin = (userId: string) => {
    setIsLoggedIn(true);
  }

  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route element={<BlobsLayout />}>
          <Route index path="/" element={<HomePage />}/>
          <Route path="/about" element={<AboutPage />}/>
          <Route path="/mission" element={<MissionPage />}/>
          <Route path="/contact" element={<ContactPage />}/>
          <Route path="/signin" element={<SignInPage />}/>
        </Route>
        <Route path="/:user_id/videos" element={<VideosPage />}/>
        <Route path="/:user_id/videos/:video_id" element={<VideoPage />}/>
      </Route>
    </Routes>
  )
}

export default App