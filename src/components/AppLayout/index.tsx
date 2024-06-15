import Header from "../Header"
import AnimatedOutlet from "../AnimatedOutlet"
import needsBlob from "../../helpers/needsBlobs"

// Passes the needsBlob function to the AnimatedOutlet component
// It determines if the Blobs component need to be re-rednerd based on the current route
function AppLayout(): JSX.Element {
  return (
		<>
      <Header />
			<AnimatedOutlet pathCondition={needsBlob}/>
		</>
  )
}	

export default AppLayout