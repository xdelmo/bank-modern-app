import React from "react";
import { motion } from "framer-motion";

export const Button = ({ styles }) => (
  <motion.button
    type="button"
    className={`py-4 px-6 bg-blue-gradient font-poppins font-semibold text-[18px] text-primary outline-none ${styles} rounded-lg`}
    whileHover={{
      scale: 1.1,
      boxShadow: "0px 20px 100px -10px rgba(66, 71, 91, 0.1)",
    }}
    whileTap={{ scale: 0.9 }}
  >
    Get Started
  </motion.button>
);

export default Button;
