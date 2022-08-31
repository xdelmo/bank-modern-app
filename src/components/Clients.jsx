import React from "react";
import { clients } from "../constants";
import styles from "../style";
import { motion } from "framer-motion";

const logoVariants = {
  hover: {
    // dropShadow: "12px 12px 7px rgba(0, 0, 0, 0.5)",
    scale: 1.1,
    transition: {
      duration: 0.3,
    },
  },
};

const Clients = () => (
  <section id="clients" className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter}  flex-wrap w-full`}>
      {clients.map((client) => (
        <div
          key={client.id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}
        >
          <motion.img
            src={client.logo}
            alt="client"
            className="sm:w-[192px] w-[100px] object-contain shadowfilter"
            variants={logoVariants}
            whileHover="hover"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
