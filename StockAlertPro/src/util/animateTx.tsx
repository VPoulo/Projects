import { motion } from "framer-motion";

interface AnimateTxProps {
  children?: React.ReactNode;
}

export const AnimateTx = ({ children }: AnimateTxProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateTx;
