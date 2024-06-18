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

import HeaderLayout from "./components/HeaderLayout"
import BlobsLayout from "./components/BlobsLayout"
import AppLayout from "./components/AppLayout"
import PrivateRoute from './components/PrivateRoute'
import AppContext from "./components/AppContext"

import "./App.css"
import "./reset.css"

function App() {
  return (
    <AppContext>
      <Routes>
        <Route element={<AppLayout />}>
          <Route element={<HeaderLayout/>}>
            <Route element={<BlobsLayout />}>
              <Route index path="/" element={<HomePage />}/>
              <Route path="/about" element={<AboutPage />}/>
              <Route path="/mission" element={<MissionPage />}/>
              <Route path="/contact" element={<ContactPage />}/>
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path={`/:user_id/videos`} element={<VideosPage />}/>
              <Route path={`/:user_id/videos/:video_id`} element={<VideoPage />}/>
            </Route>
            <Route element={<BlobsLayout />}>
              <Route path="/signin" element={<SignInPage />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </AppContext>
  )
}

export default App