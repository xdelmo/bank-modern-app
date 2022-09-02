import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";
import { motion } from "framer-motion";

const scaleUpVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  whileInView: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
  viewport: { once: true },
  whileHover: {
    scale: 1.1,
    boxShadow: "0px 0px 24px rgba(188, 165, 255, 0.3)",
  },
  whileTap: {
    scale: 0.9,
  },
};

const GetStarted = () => (
  // BLUE GRADIENT FULL CIRCLE
  <motion.div
    className={`${styles.flexCenter} w-[140px] h-[140px] bg-blue-gradient rounded-full p-[2px] get-started cursor-pointer`}
    variants={scaleUpVariants}
    initial="hidden"
    whileInView="whileInView"
    viewport="viewport"
    whileHover="whileHover"
    whileTap="whileTap"
  >
    {/* p-[2px] as circle border */}
    {/* DARK FULL CIRCLE OVER THE GRADIENT */}
    <div
      className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full `}
    >
      <div className={`${styles.flexCenter} `}>
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="mr-2 text-gradient">Get</span>
        </p>
        <img
          src={arrowUp}
          alt="arrowUp"
          className="w-[23px] h-[23px] object-contain"
        />
      </div>
      <p className="font-poppins font-medium text-[18px] leading-[23px]">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </motion.div>
);

export default GetStarted;
