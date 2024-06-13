import { useState } from 'react'

import { 
  BrowserRouter as Router, 
  Route, Link, Routes 
} from "react-router-dom"

import { 
  HomePage,
  VideoPage,
  VideosPage,
  AboutPage,
  MissionPage,
} from "./components/pages"

import "./App.css"
import "./reset.css"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}/>

          <Route path="/about" element={<AboutPage />}/>
          <Route path="/mission" element={<MissionPage />}/>

          <Route path="/videos/:user_id" element={<VideosPage />}/>
          <Route path="/video/:video_id" element={<VideoPage />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App