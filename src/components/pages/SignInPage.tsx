import { useState, useEffect } from 'react'

import AnimatedComponent from "../AnimatedComponent"
import SignIn from "../SignIn"

function SignInPage() {
  return (
    <AnimatedComponent>
      <div id="signin-page_container">
        <SignIn />
      </div>
    </AnimatedComponent>
  )
}

export default SignInPage