import { cloneElement } from "react"
import { useLocation, useOutlet } from "react-router-dom"

import { AnimatePresence, motion } from "framer-motion"

function AnimatedOutlet(): JSX.Element {
	const location = useLocation();
	const element = useOutlet();
	
	return (
		<AnimatePresence mode='wait'>
			{ element && cloneElement(element, { key: location.pathname })}
		</AnimatePresence>
	)
}

export default AnimatedOutlet