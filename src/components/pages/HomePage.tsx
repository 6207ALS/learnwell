import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from "../Header"
import Hero from "../Hero"

function HomePage() {
  return (
    <div id="home-page_container">
      <Header />
      <Hero />
    </div>
  )
}

export default HomePage