import React from "react";
import { useState } from "react";
import ContactCSS from "../components/Contact.module.css";
import waves from "../img/one_wave_red_rev.png";

export const ContactForm = () => {
  const headerContact = "Want to build a thing?";
  const contactMe = "Contact Me";

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isFirstNameError = isSubmitted && firstName === "";
  const isLastNameError = isSubmitted && lastName === "";
  const isEmailError = isSubmitted && email === "";
  const isMessageError = isSubmitted && message === "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    //Check for error while form is submitted
    if (isFirstNameError || isLastNameError || isEmailError || isMessageError) {
      console.log("An error has occured.  Please fill in all required fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          message,
        }),
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className={ContactCSS.ContactForm}>
        <img className={ContactCSS.Waves} src={waves} alt="Abstract waves" />
        <div className={ContactCSS.HeaderContact}>
          <h1>{headerContact}</h1>
        </div>
        <div className={ContactCSS.ContactMe}>
          <h2>{contactMe}</h2>
        </div>
        <div className={ContactCSS.Form}>
          <form onSubmit={handleSubmit}>
            {/* First Name Section  */}
            <div>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {isFirstNameError && (
                <span className={ContactCSS.ErrorMessage}>
                  {" "}
                  Please enter a valid First Name
                </span>
              )}
            </div>
            {/* Last Name Section  */}
            <div>
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              {isLastNameError && (
                <span className={ContactCSS.ErrorMessage}>
                  Please enter a valid Last Name
                </span>
              )}
            </div>
            {/* Email Section  */}
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {isEmailError && (
                <span className={ContactCSS.ErrorMessage}>
                  Please enter a valid email address
                </span>
              )}
            </div>
            {/* Message Section  */}
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              {isMessageError && (
                <span className={ContactCSS.ErrorMessage}>
                  Please enter a valid message
                </span>
              )}
            </div>
            <button className={ContactCSS.SendButton} type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
