import React from "react";
import styles, { layout } from "../style";
import Button from "./Button";
import { card } from "../assets";
import { motion } from "framer-motion";

const CardDeal = ({ slideRightVariants }) => (
  <motion.section
    className={layout.section}
    variants={slideRightVariants}
    initial={slideRightVariants.hidden}
    whileInView={slideRightVariants.whileInView}
    viewport={{ once: true }}
  >
    {/* HEADING */}
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal
        <br className="hidden sm:block" /> we’ll handle the in few easy steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>
      <Button styles="mt-10" />
    </div>
    {/* IMG */}
    <div className={`${layout.sectionImg}`}>
      <img src={card} alt="card" className="w-[100%]" />{" "}
    </div>
  </motion.section>
);

export default CardDeal;
