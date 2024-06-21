import AnimatedOutlet from "../AnimatedOutlet"
import needsHeader from "../../helpers/needsHeader"
import AnimatedComponent from "../AnimatedComponent"

// Animates App component on render
// Passes the needsBlob function to the AnimatedOutlet component
// which determines if the Blobs component need to be re-rendered based on the 
// current route
function AppLayout(): JSX.Element {
  return (
		<AnimatedComponent>
			<AnimatedOutlet pathCondition={needsHeader}/>
		</AnimatedComponent>
  )
}	

export default AppLayout