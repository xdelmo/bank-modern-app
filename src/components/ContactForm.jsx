import React, { useState } from "react";
import Button from "../components/Button";
import FormInput from "../components/FormInput";
import styles from "../style";
import { motion } from "framer-motion";

export default function ContactForm({ scaleUpVariants }) {
  const [values, setValues] = useState({
    username: "",
    email: "",
    textarea: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "your@email.com",
      errorMessage: "It should be a valid email address",
      label: "Email",
      required: true,
    },

    {
      id: 3,
      name: "textarea",
      type: "textarea",
      placeholder: "Write your message here",
      label: "Message",
      rows: 10,
      required: true,
    },
  ];

  function handleSubmit(e) {
    // prevent refresh page on button click
    e.preventDefault();
  }

  function onChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  return (
    <motion.section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow items-center `}
      variants={scaleUpVariants}
      initial={scaleUpVariants.hidden}
      whileInView={scaleUpVariants.whileInView}
      viewport={{ once: true }}
    >
      {/* w-full to contain input field into div without overflowing */}
      <div className="flex flex-col flex-1 w-full p-5">
        <h2 className={`${styles.heading2} mb-5`}>
          Let’s try our service now!
        </h2>
        <form onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <Button />
        </form>
      </div>
    </motion.section>
  );
}
