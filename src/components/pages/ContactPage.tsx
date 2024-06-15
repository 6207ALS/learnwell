import AnimatedComponent from '../AnimatedComponent'

import Contact from "../Contact"

function HomePage() {
  return (
    <AnimatedComponent>
      <div id="contact-page_container">
        <Contact />
      </div>
    </AnimatedComponent>
  )
}

export default HomePage