import { useState } from 'react'

import { 
  BrowserRouter as Router, 
  Route, Link, Routes 
} from "react-router-dom"

import { 
  HomePage,
  VideoPage,
  VideosPage,
} from "./components/pages"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/videos/:user_id" element={<VideosPage />}/>
          <Route path="/video/:video_id" element={<VideoPage />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App