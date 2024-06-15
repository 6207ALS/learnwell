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

import "./App.css"
import "./reset.css"

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route element={<BlobsLayout />}>
          <Route index path="/" element={<HomePage />}/>
          <Route path="/about" element={<AboutPage />}/>
          <Route path="/mission" element={<MissionPage />}/>
          <Route path="/contact" element={<ContactPage />}/>
        </Route>
        <Route path="/videos/:video_id" element={<VideoPage />}/>
        <Route path="/videos" element={<VideosPage />}/>
        <Route path="/signin" element={<SignInPage />}/>
      </Route>
    </Routes>
  )
}

export default App