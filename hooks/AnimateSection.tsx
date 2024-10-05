"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AnimateSection = React.memo(function AnimateSection({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      style={{ willChange: "opacity, transform" }} // Added will-change
    >
      {children}
    </motion.div>
  );
});

export default AnimateSection;
