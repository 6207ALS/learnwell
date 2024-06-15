import { motion } from "framer-motion"

const AnimatedComponent = ({ children }: { children?: React.ReactNode}): JSX.Element => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.5, 
        type: "linear"
      }}
      className="ease"
    >
      { children }
    </motion.div>
  )
};

export default AnimatedComponent;