import React from "react";
import { stats } from "../constants";
import styles from "../style";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const statsVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const statVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Stats = () => (
  <motion.section
    className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
    variants={statsVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
  >
    {stats.map((stat) => (
      <motion.div key={stat.id} variants={statVariants}>
        <CountUp
          start={0}
          end={stat.value}
          delay={0.5}
          prefix={stat.prefix}
          suffix={stat.suffix}
          enableScrollSpy={true}
          scrollSpyOnce={true}
        >
          {({ countUpRef }) => (
            <div className="flex flex-row items-center justify-start flex-1 m-3 sm:justify-center">
              <h4
                ref={countUpRef}
                className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white"
              >
                {/* {stat.value} */}
              </h4>

              {/* whitespace-nowrap to force title's stat on a single line */}
              <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3 whitespace-nowrap">
                {stat.title}
              </p>
            </div>
          )}
        </CountUp>
      </motion.div>
    ))}
  </motion.section>
);

export default Stats;
