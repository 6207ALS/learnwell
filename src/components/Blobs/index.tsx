import './styles.css'
import { useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react';

function Blobs(): JSX.Element {
  const location = useLocation() 
  const blobA = useRef<HTMLDivElement>(null);
  const blobB = useRef<HTMLDivElement>(null);
  const blobC = useRef<HTMLDivElement>(null);

	// Changes colors of blobs based on route
  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      if (blobA.current) blobA.current.className = "blob hero-aqua"
      if (blobB.current) blobB.current.className = "blob hero-navy"
      if (blobC.current) blobC.current.className = "blob hero-gold"
    } else if (path === "/mission") {
      if (blobA.current) blobA.current.className = "blob mission-red"
      if (blobB.current) blobB.current.className = "blob mission-yellow"
      if (blobC.current) blobC.current.className = "blob mission-blue"
    } else if (path === "/about") {
      if (blobA.current) blobA.current.className = "blob about-blue"
      if (blobB.current) blobB.current.className = "blob about-pink"
      if (blobC.current) blobC.current.className = "blob about-purple"
    } else if (path === "/contact") {
      if (blobA.current) blobA.current.className = "blob contact-red"
      if (blobB.current) blobB.current.className = "blob contact-brick"
      if (blobC.current) blobC.current.className = "blob contact-purple"
    } else if (path === "/signin") {
      if (blobA.current) blobA.current.className = "blob about-blue"
      if (blobB.current) blobB.current.className = "blob contact-purple"
      if (blobC.current) blobC.current.className = "blob mission-yellow"
    } 
  }, [location])

  return (
    <>
      <div id="blobs_container">
        <div ref={blobA} className="blob" id="blob-A"></div>
        <div ref={blobB} className="blob" id="blob-B"></div>
        <div ref={blobC} className="blob" id="blob-C"></div>
      </div>
    </>
  )
}	

export default Blobs