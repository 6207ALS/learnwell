import './styles.css'
import { Outlet } from "react-router-dom"
import Blobs from "../Blobs"

function BlobsLayout(): JSX.Element {
  return (
    <>
			<Blobs />
      <Outlet />
    </>
  )
}	

export default BlobsLayout