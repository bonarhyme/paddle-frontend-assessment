import React from "react";
import styles from "../styles/Contact.module.css";
import { BsArrowRight } from "react-icons/bs";

const Contact = ({ setShowContactUs }) => {
  return (
    <aside className={styles.contactContainer}>
      <div className={styles.leftContainer}></div>
      <div className={styles.rightContainer}>
        <div
          className={styles.arrowContainer}
          onClick={() => setShowContactUs(false)}
        >
          <BsArrowRight color="#1e0040" size={22} />
        </div>
        <p className={styles.contactP}>
          Hey, we are still in the works, <br className={styles.hideBrSM} /> but
          you can send us a message!
        </p>
        <div className={styles.formContainer}>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className={styles.formControl}>
              <label htmlFor="firstName">First name</label>
              <input
                type="text"
                placeholder="Enter your first name"
                id="firstName"
              />
            </div>
            <div className={styles.formControl}>
              <label htmlFor="lastName">Last name</label>
              <input
                type="text"
                placeholder="Enter your last name"
                id="lastName"
              />
            </div>
            <div className={styles.formControl}>
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                placeholder="Enter your Email Addresss"
                id="email"
              />
            </div>
            <div className={styles.formControl}>
              <label htmlFor="message">Tell Us What You Need Help With:</label>
              <textarea
                type="message"
                placeholder="Enter A Topic Like 'Channel Problem...'"
                id="message"
                rows={6}
              ></textarea>
            </div>
            <div className={styles.buttonContainer}>
              <button type="submit">SEND NOW</button>
            </div>
          </form>
        </div>
      </div>
    </aside>
  );
};

export default Contact;
