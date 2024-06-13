import { useState } from 'react'
import './App.css'

import { 
  BrowserRouter as Router, 
  Route, Link, Routes 
} from "react-router-dom"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/" element={}/>
          <Route path="/" element={}/>
        </Routes>
      </Router>
    </>
  )
}

export default App