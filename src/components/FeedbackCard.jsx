import React from "react";
import { quotes } from "../assets";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const FeedbackCard = ({ content, name, title, img }) => {
  return (
    <motion.div
      className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card"
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <img
        src={quotes}
        alt="double_quotes"
        className="w-[42px] h-[27px] object-contain"
      />
      {/* QUOTE */}
      <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">
        {content}
      </p>
      {/* TESTIMONIAL INFO */}
      <div className="flex flex-row items-center">
        <img src={img} alt={name} className="rounded-full w-[48px] h-[48px]" />
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white ">
            {name}
          </h4>
          <p className="font-poppins font-semibold text-[16px] leading-[24px] text-dimWhite">
            {title}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default FeedbackCard;
