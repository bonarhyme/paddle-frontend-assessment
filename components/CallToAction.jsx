import React from "react";
import styles from "../styles/About.module.css";
import { BsArrowRight } from "react-icons/bs";

const CallToAction = ({
  title,
  actionName,
  action,
  backgroundColor = false,
}) => {
  return (
    <section
      className={styles.sectionFour}
      style={{
        backgroundColor: backgroundColor
          ? "#1f3569"
          : "rgba(114, 113, 113, 0.192)",
      }}
    >
      <div>
        <h2 className={styles.sectionFourH2}>{title}</h2>
        <p className={styles.sectionFourP}>{actionName}</p>
        <a className={styles.sectionFourAnchor}>
          {action} <BsArrowRight size={20} />
        </a>
      </div>
    </section>
  );
};

CallToAction.defaultProps = {
  title: "Got a Question?",
  actionName: `See how Metricks can help your business grow with best affiliate
    marketing tracking software`,
  action: `Contact Us`,
};

export default CallToAction;
