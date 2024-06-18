import AnimatedOutlet from "../AnimatedOutlet"
import needsHeader from "../../helpers/needsHeader"
import AnimatedComponent from "../AnimatedComponent"

// Passes the needsBlob function to the AnimatedOutlet component
// It determines if the Blobs component need to be re-rednerd based on the current route
function AppLayout(): JSX.Element {
  return (
		<AnimatedComponent>
			<AnimatedOutlet pathCondition={needsHeader}/>
		</AnimatedComponent>
  )
}	

export default AppLayout