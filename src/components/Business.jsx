import React from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { motion } from "framer-motion";

const featureCardVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const FeatureCard = ({ icon, title, content, index }) => (
  <motion.div
    className={`flex flex-row items-center p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
    variants={featureCardVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
  >
    {/* ICON AND ITS CIRCLE */}
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    {/* CONTENT */}
    <div className="flex flex-col flex-1 ml-3">
      <h4 className="font-semibold text-white font-poppins text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-normal text-dimWhite font-poppins text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </motion.div>
);

const Business = () => (
  <section id="features" className={layout.section}>
    {/* HEADING + INFO */}
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        You do the business, <br className="hidden sm:block" /> we’ll handle the
        money.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds of
        credit cards on the market.
      </p>
      <Button styles="mt-10" type="button" text="Get Started" />
    </div>
    {/* map over features */}
    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
