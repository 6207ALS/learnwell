import './styles.css'
import Blobs from "../Blobs"
import AnimatedOutlet from "../AnimatedOutlet"
import AnimatedComponent from '../AnimatedComponent'
import needsBlobs from '../../helpers/needsBlobs'

function BlobsLayout(): JSX.Element {
  return (
		<AnimatedComponent>
      <Blobs />
			<AnimatedOutlet />
		</AnimatedComponent>
  )
}	

export default BlobsLayout