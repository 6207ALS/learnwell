import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import AnimatedComponent from '../AnimatedComponent'

import Header from "../Header"
import Hero from "../Hero"

function HomePage() {
  return (
    <AnimatedComponent>
      <div id="home-page_container">
        <Hero />
      </div>
    </AnimatedComponent>
  )
}

export default HomePage