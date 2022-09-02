import React from "react";
import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import { motion } from "framer-motion";

const Billing = ({ scaleUpVariants }) => (
  <section id="product" className={layout.sectionReverse}>
    {/* reverse order on mobile */}
    <div className={layout.sectionImgReverse}>
      <motion.img
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
        variants={scaleUpVariants}
        initial={scaleUpVariants.hidden}
        whileInView={scaleUpVariants.whileInView}
        viewport={scaleUpVariants.viewport}
      />
      {/* BACKGROUND GRADIENTS */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"></div>
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"></div>
    </div>
    {/* HEADING */}
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className="hidden sm:block" />
        billing & invoicing.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>

      <div className="flex flex-wrap mt-6 flow-row sm:mt-10">
        <img
          src={apple}
          alt="apple store"
          className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
        />
        <img
          src={google}
          alt="google play"
          className="w-[128px] h-[42px] object-contain  cursor-pointer"
        />
      </div>
    </div>
  </section>
);

export default Billing;
