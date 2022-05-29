import React from "react";
import Footer from "../components/Footer";

import styles from "../styles/ComingSoon.module.css";

const ComingSoon = () => {
  return (
    <div className={styles.body}>
      <main className={styles.container}>
        <h1 className={styles.heading}>
          Something awesome is <br /> coming soon
        </h1>
        <p className={styles.paragraph}>
          Your all-in-one affiliate marketing tracking software <b>track</b>,{" "}
          <b>automate</b>, and <b>optimize</b> your campaigns
        </p>

        <div className={styles.cardsContainer}>
          <span className={styles.card}>
            <b>7</b>
            <small>Days</small>
          </span>
          <span className={styles.card}>
            <b>24</b>
            <small>Hours</small>
          </span>
          <span className={styles.card}>
            <b>54</b>
            <small>Minutes</small>
          </span>
          <span className={styles.card}>
            <b>11</b>
            <small>Seconds</small>
          </span>
        </div>
        <div className={styles.formContainer}>
          <form>
            <div className={styles.firstLastName}>
              <input type="text" placeholder="First Name..." />
              <input type="text" placeholder="Last Name..." />
            </div>
            <div className={styles.emailSubmit}>
              <input type="email" placeholder="Enter your email address..." />
              <button type="submit">JOIN OUR WAITING LIST</button>
            </div>
          </form>
        </div>
      </main>
      <Footer backgroundColor />
    </div>
  );
};

export default ComingSoon;
