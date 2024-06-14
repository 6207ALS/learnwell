import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import AnimatedPage from '../AnimatedPage'

import Header from "../Header"
import Hero from "../Hero"

function HomePage() {
  return (
    <AnimatedPage>
      <div id="home-page_container">
        <Hero />
      </div>
    </AnimatedPage>
  )
}

export default HomePage