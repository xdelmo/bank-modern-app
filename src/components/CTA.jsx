import React from "react";
import styles from "../style";
import Button from "./Button";
import { motion } from "framer-motion";

const CTAVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
};

const CTA = () => (
  <motion.section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow items-center`}
    variants={CTAVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
  >
    <div className="flex flex-col flex-1">
      <h2 className={styles.heading2}>Let’s try our service now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 my-5 sm:my-0`}>
      <Button />
    </div>
  </motion.section>
);

export default CTA;
