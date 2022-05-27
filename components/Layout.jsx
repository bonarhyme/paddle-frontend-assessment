import React, { useState } from "react";
import Image from "next/image";
import transparentLogo from "../public/assets/transparent_metrics_logo.png";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <nav className={styles.container}>
        <Link href="/" passHref>
          <a className={styles.logoContainer}>
            <Image
              src={transparentLogo}
              alt="metricks logo"
              width={100}
              height={50}
            />
          </a>
        </Link>
        <div className={`${styles.bar} ${show ? styles.active : ""}`}>
          <FaBars
            size={35}
            color="white"
            onClick={() => setShow((prev) => !prev)}
          />
        </div>
        <div
          className={`${styles.linksContainer} ${show ? "" : styles.toggleBar}`}
        >
          <Link href="/about" passHref>
            <a>About us</a>
          </Link>
          <Link href="/blog" passHref>
            <a>Blog</a>
          </Link>
          <Link href="#contact" passHref>
            <a className={styles.contactUsAnchor}>Contact us</a>
          </Link>
        </div>
      </nav>
      {children}
    </>
  );
};

export default Layout;
