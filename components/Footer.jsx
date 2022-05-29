import React from "react";
import styles from "../styles/Footer.module.css";
import {
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { variables } from "../data/variables";
import Link from "next/link";

const Footer = ({ backgroundColor = true }) => {
  return (
    <footer
      className={`${styles.footer} ${!backgroundColor ? styles.blog : ""}`}
    >
      <div className={styles.iconContainer}>
        <a
          href={variables.social.youtube}
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaYoutube
            size={25}
            className={styles.icon}
            color={!backgroundColor ? "#1e0040" : "white"}
            target="_blank"
          />
        </a>
        <a
          href={variables.social.facebook}
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaFacebook
            size={25}
            className={styles.icon}
            color={!backgroundColor ? "#1e0040" : "white"}
            target="_blank"
          />
        </a>
        <a
          href={variables.social.linkedIn}
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaLinkedin
            size={25}
            className={styles.icon}
            color={!backgroundColor ? "#1e0040" : "white"}
            target="_blank"
          />
        </a>
        <a
          href={variables.social.instagram}
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaInstagram
            size={25}
            className={styles.icon}
            color={!backgroundColor ? "#1e0040" : "white"}
            target="_blank"
          />
        </a>
        <a
          href={variables.social.twitter}
          target="_blank"
          rel="noreferrer noopener"
        >
          {" "}
          <FaTwitter
            size={25}
            className={styles.icon}
            color={!backgroundColor ? "#1e0040" : "white"}
            target="_blank"
          />
        </a>
      </div>
      <div className={styles.meta}>
        <Link href="#" passHref>
          <a>Terms of service</a>
        </Link>
        <Link href="#" passHref>
          <a>Privacy policy</a>
        </Link>
      </div>
      <div>
        <p>Copyright 2021 &copy; Peddie Technologies. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
