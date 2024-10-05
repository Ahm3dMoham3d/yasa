"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Adjust stagger timing here
    },
  },
};

const childVariant = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const AnimateStaggerChildren = React.memo(
  ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true });

    return (
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className={className}
      >
        {React.Children.map(children, (child) =>
          React.isValidElement(child) ? (
            <motion.div variants={childVariant}>{child}</motion.div>
          ) : (
            child
          )
        )}
      </motion.div>
    );
  }
);

AnimateStaggerChildren.displayName = "AnimateStaggerChildren";

export default AnimateStaggerChildren;
