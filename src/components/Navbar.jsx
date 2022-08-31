import React, { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { motion } from "framer-motion";

function Navbar() {
  // toggle open and close menu on mobile
  const [toggle, setToggle] = useState(false);

  const ulVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const liVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <nav className="flex items-center justify-between w-full py-6 navbar">
      {/* LOGO */}
      <motion.img
        src={logo}
        alt="hoobank"
        className="w-[124px] h-[32px]"
        variants={logoVariants}
        initial="hidden"
        animate="show"
      />
      {/* DESKTOP NAVBAR */}
      <motion.ul
        className="items-center justify-end flex-1 hidden list-none sm:flex"
        variants={ulVariants}
        initial="hidden"
        animate="show"
      >
        {/* last navLinks has no margin right */}
        {navLinks.map((nav, index) => (
          <motion.li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-white hover:text-secondary`}
            variants={liVariants}
          >
            {/* href to pages ID */}
            <a href={`#${nav.id}`}>{nav.title}</a>
          </motion.li>
        ))}
      </motion.ul>
      {/* MOBILE NAVBAR */}
      <div className="flex items-center justify-end flex-1 sm:hidden">
        {/* dynamic img */}
        <motion.img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] object-contain"
          // switch between current and previous state
          onClick={() => setToggle((prev) => !prev)}
          // use layout's Framer Motion to animate without any code
          layout
          variants={logoVariants}
          initial="hidden"
          animate="show"
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="flex flex-col items-center justify-end flex-1 list-none">
            {/* last navLinks has no margin right */}
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16] ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-10"
                } text-white hover:text-secondary`}
                // switch between current and previous state
                onClick={() => setToggle((prev) => !prev)}
              >
                {/* href to pages ID */}
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
