import { useState, useEffect } from 'react'

import AnimatedComponent from '../AnimatedComponent'
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