import Header from "../Header"
import AnimatedOutlet from "../AnimatedOutlet"
import needsBlob from "../../helpers/needsBlobs"
import AnimatedComponent from "../AnimatedComponent"

// Passes the needsBlob function to the AnimatedOutlet component
// It determines if the Blobs component need to be re-rednerd based on the current route
function HeaderLayout(): JSX.Element {
  return (
		<AnimatedComponent>
      <Header />
			<AnimatedOutlet pathCondition={needsBlob}/>
		</AnimatedComponent>
  )
}	

export default HeaderLayout