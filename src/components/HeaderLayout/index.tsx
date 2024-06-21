import Header from "../Header"
import AnimatedOutlet from "../AnimatedOutlet"
import needsBlob from "../../helpers/needsBlobs"
import AnimatedComponent from "../AnimatedComponent"

// Renders Header component along with components from child Route
// Passes the needsBlob function to the AnimatedOutlet component
// which determines if the Blobs component need to be re-rendered based on 
// the current route
function HeaderLayout(): JSX.Element {
  return (
		<AnimatedComponent>
      <Header />
			<AnimatedOutlet pathCondition={needsBlob}/>
		</AnimatedComponent>
  )
}	

export default HeaderLayout