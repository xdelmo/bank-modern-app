import React from "react";
import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section
    id="clients "
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    {/* BACKGROUND GRADIENT */}
    <div className="absolute z-[0]  w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient"></div>

    {/* HEADING */}
    <div className="relative flex flex-col items-center justify-between w-full mb-6 md:flex-row sm:mb-16 z-[1]">
      <h1 className={styles.heading2}>
        What people are
        <br className="hidden sm:block " /> saying about us
      </h1>
      <div className="w-full mt-5 md:mt-0">
        <p className={`${styles.paragraph} max-w-[450px]  text-left `}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
    </div>
    {/* CARDS CONTAINER */}
    <div className="flex flex-wrap justify-center sm:justify-start w-full feedback-container relative z-[1]">
      {/* CARD */}
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
