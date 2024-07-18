import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, forwardRef } from "react";
import ContactCSS from "../components/Contact.module.css";
import { Typewriter } from "../UI/Typewriter";
import { API_URL, APP_ROUTE } from "../UI/constants";

export const ContactForm = forwardRef((props, ref) => {
  const navigate = useNavigate();

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
      const response = await fetch(`${API_URL}/contact`, {
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

      if (response.ok) {
        console.log("Your form has been successfully submitted!");
        navigate(APP_ROUTE.HEADERS);
      } else {
        console.error("An error has occurred, the form failed to submit");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div ref={ref} className={ContactCSS.ContactForm}>
        <div className={ContactCSS.SecondContainer}>
          <div className={ContactCSS.HeaderContact}>
            <Typewriter text={headerContact} delay={100} />
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
      </div>
    </>
  );
});

ContactForm.displayName = "ContactForm";
