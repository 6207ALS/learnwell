import { cloneElement } from "react"
import { useLocation, useOutlet } from "react-router-dom"

import { AnimatePresence } from "framer-motion"

interface AnimatedOutletProps {
	pathCondition?: (path: string) => string
}

// Custom outlet that uses a key value to determine if the route requires an animation
function AnimatedOutlet({ pathCondition }: AnimatedOutletProps): JSX.Element {
	const location = useLocation();
	const element = useOutlet();
	
	return (
		<AnimatePresence mode='wait'>
			{ 
				element && cloneElement(element, { 
					key: pathCondition ? pathCondition(location.pathname) : location.pathname
				})
			}
		</AnimatePresence>
	)
}

export default AnimatedOutlet