"use client";
import { motion } from "framer-motion";

const variantsMap = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6 },
    },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
  slideRight: {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
};

const MotionWrapper = ({
  children,
  variant = "fadeUp",
  className = "",
  once = true,
  amount = 0.2,
  delay = 0,
}) => {
  const selectedVariant = {
    ...variantsMap[variant],
    visible: {
      ...variantsMap[variant].visible,
      transition: {
        ...variantsMap[variant].visible.transition,
        delay,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={selectedVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
