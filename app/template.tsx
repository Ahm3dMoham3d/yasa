"use client";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.5 },
  },
};

export default function template({
  children,
  key,
}: {
  children: React.ReactNode;
  key: string;
}) {
  return (
    <AnimatePresence mode="wait">
      {children && (
        <motion.div
          key={key} // Use key to ensure the correct component is animated
          initial="initial"
          animate="enter"
          exit="exit"
          variants={variants}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
