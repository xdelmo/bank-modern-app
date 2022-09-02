import React from "react";
import { clients } from "../constants";
import styles from "../style";
import { motion } from "framer-motion";

const clientsVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const clientVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const imgVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
    },
  },
};

const Clients = () => (
  <section id="clients" className={`${styles.flexCenter} my-4`}>
    <motion.div
      className={`${styles.flexCenter}  flex-wrap w-full`}
      variants={clientsVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {clients.map((client) => (
        <motion.div
          key={client.id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}
          variants={clientVariants}
        >
          <motion.img
            src={client.logo}
            alt="client"
            className="sm:w-[192px] w-[100px] object-contain shadowfilter"
            variants={imgVariants}
            whileHover="hover"
          />
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default Clients;
