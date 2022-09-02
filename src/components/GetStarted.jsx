import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";
import { motion } from "framer-motion";

const getStartedVariants = {
  hidden: { scale: 1 },
  show: {
    scale: [1, 1.1, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
    },
  },
};

const GetStarted = () => (
  // BLUE GRADIENT FULL CIRCLE
  <motion.div
    className={`${styles.flexCenter} w-[140px] h-[140px] bg-blue-gradient rounded-full p-[2px] get-started cursor-pointer shadowfilter`}
    variants={getStartedVariants}
    initial="hidden"
    animate="show"
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
