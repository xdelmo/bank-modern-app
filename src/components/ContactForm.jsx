import React, { useState, useRef } from "react";
import Button from "../components/Button";
import FormInput from "../components/FormInput";
import styles from "../style";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function ContactForm({ scaleUpVariants }) {
  const form = useRef();
  // states to update DOM and feedback message after clicking on button
  const [hasBeenSent, SetHasBeenSent] = useState(false);
  const [messageFeedback, SetMessageFeedback] = useState("");
  // state to create an animation in the submit button which will be passed as a props
  const [isLoading, SetIsLoading] = useState(false);

  // state as object to maintain form's input
  const [values, setValues] = useState({
    username: "",
    email: "",
    textarea: "",
  });

  // variable to structure HTML inputs tag in submit form
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

  // update a value everytime it is changed
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

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
    SetIsLoading(true);
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
        <h2 className={`${styles.heading2} `}>Manage your finance with us!</h2>
        <p className={`${styles.paragraph}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        {/* display form and its button until email has not been sent */}
        {/* then display messageFeedback */}
        {!hasBeenSent ? (
          <div>
            <form ref={form} onSubmit={sendEmail} className="my-5">
              {inputs.map((input) => (
                <FormInput
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                />
              ))}
              <Button type="submit" text="Contact Us" isLoading={isLoading} />
            </form>
            <h4 className="font-medium font-poppins text-dimWhite">
              By contacting us you are agreeing to our{" "}
              <span className="cursor-pointer text-secondary">
                Terms and Conditions
              </span>
            </h4>
          </div>
        ) : (
          <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-gradient mt-5">
            {messageFeedback}
          </h4>
        )}
      </div>
    </motion.section>
  );
}
