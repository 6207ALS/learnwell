import './styles.css'
import Blobs from "../Blobs"
import Header from "../Header"
import AnimatedOutlet from "../AnimatedOutlet"

function BlobsLayout(): JSX.Element {
  return (
    <>
      <Blobs />
			<Header />
      <AnimatedOutlet />
    </>
  )
}	

export default BlobsLayout

/*
DIRECT CHILDREN of AnimatePresence must be 

*/