import { useState, useEffect } from 'react'

import AnimatedComponent from '../AnimatedComponent'
import Hero from "../Hero"

interface HomePageProps {
	userID?: string | null
}

function HomePage({ userID }: HomePageProps) {
  return (
    <AnimatedComponent>
      <div id="home-page_container">
        <Hero userID={userID} />
      </div>
    </AnimatedComponent>
  )
}

export default HomePage