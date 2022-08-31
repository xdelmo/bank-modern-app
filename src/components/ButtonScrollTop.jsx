import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ButtonScrollTop = () => {
  const [visible, setVisible] = useState(false);

  function toggleVisible() {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  window.addEventListener("scroll", toggleVisible);

  const buttonVariants = {
    hidden: {
      x: "30vw",
    },
    whileHover: {
      boxShadow: "0px 20px 100px -10px rgba(66, 71, 91, 0.1)",
      scale: 1.1,
    },
    whileTap: { scale: 0.9 },
    show: {
      x: 0,
      transition: {
        duration: 0.75,
        ease: "easeInOut",
      },
    },
    exit: {
      x: "30vw",
      transition: {
        duration: 0.75,
        ease: "easeInOut",
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.button
          className="py-4 fixed px-6 bg-blue-gradient font-poppins font-bold bottom-[10%] right-10 text-[18px] text-primary outline-none rounded-lg z-50"
          onClick={scrollToTop}
          variants={buttonVariants}
          initial="hidden"
          animate="show"
          whileHover="whileHover"
          whileTap="whileTap"
          exit="exit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-3 h-3 md:h-6 md:w-6"
          >
            <path
              fillRule="evenodd"
              d="M11.47 2.47a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06l-6.22-6.22V21a.75.75 0 01-1.5 0V4.81l-6.22 6.22a.75.75 0 11-1.06-1.06l7.5-7.5z"
              clipRule="evenodd"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ButtonScrollTop;
