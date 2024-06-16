import { useState, useEffect } from 'react'

import AnimatedComponent from "../AnimatedComponent"
import SignIn from "../SignIn"

interface SignInPageProps {
	handleLogin: (userID: string) => void
}

function SignInPage({ handleLogin }: SignInPageProps) {
  return (
    <AnimatedComponent>
      <SignIn handleLogin={handleLogin}/>
    </AnimatedComponent>
  )
}

export default SignInPage