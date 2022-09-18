import React, { useState, useRef } from "react";
import Button from "../components/Button";
import FormInput from "../components/FormInput";
import styles from "../style";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function ContactForm({ scaleUpVariants }) {
  const [values, setValues] = useState({
    username: "",
    email: "",
    textarea: "",
  });

  const inputs = [
    {
      id: 1,
      name: "user_name",
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
      name: "user_email",
      type: "email",
      placeholder: "your@email.com",
      errorMessage: "It should be a valid email address",
      label: "Email",
      required: true,
    },

    {
      id: 3,
      name: "message",
      type: "textarea",
      placeholder: "Write your message here",
      label: "Message",
      rows: 10,
      required: true,
    },
  ];

  function onChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  const form = useRef();
  // states to update DOM and feedback message after clicking on button
  const [hasBeenSent, SetHasBeenSent] = useState(false);
  const [messageFeedback, SetMessageFeedback] = useState("");
  // function to update text to render after sent email
  const updateFeedback = (text) => {
    // if email has been sent correctly, text result from emailjs would be "OK"
    if (text === "OK") {
      return "Thank you for contacting us!";
    } else {
      return "Something went wrong! Please refresh page and try again.";
    }
  };

  const sendEmail = (e) => {
    // preventing page refresh on submit
    e.preventDefault();

    // import environment variables to link form to emailJS service
    emailjs
      .sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        process.env.REACT_APP_YOUR_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          // update messageFeedback and hasBeenSent states to hide form and display feedback
          SetMessageFeedback(updateFeedback(result.text));
          SetHasBeenSent(true);
        },
        (error) => {
          console.log(error.text);
          SetMessageFeedback(updateFeedback(error.text));
          SetHasBeenSent(true);
        }
      );
  };

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
        {/* display form and its button until email has not been sent */}
        {/* then display messageFeedback */}
        {!hasBeenSent ? (
          <form ref={form} onSubmit={sendEmail}>
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            <Button type="submit" text="Submit" />
          </form>
        ) : (
          <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-gradient">
            {messageFeedback}
          </h4>
        )}
      </div>
    </motion.section>
  );
}
