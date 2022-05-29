import React, { useState, useEffect } from "react";
import Image from "next/image";
import transparentLogo from "../public/assets/transparent_metrics_logo.png";
import opaqueLogo from "../public/assets/opaque_metricks_logo.PNG";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { useRouter } from "next/router";

import styles from "../styles/Layout.module.css";
import Contact from "./Contact";

const Layout = ({ children }) => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [showContactUs, setShowContactUs] = useState(false);
  const [blogURL, setBlogURL] = useState(false);

  useEffect(() => {
    // Change the style of layout on /blog routes
    if (router.pathname.startsWith("/blog")) {
      setBlogURL(true);
    }
    return () => setBlogURL(false);
  }, [router.pathname]);

  return (
    <>
      <div className={styles.relative}>
        <nav className={`${styles.container} ${blogURL ? styles.blog : ""}`}>
          <Link href="/" passHref>
            <a className={styles.logoContainer}>
              <Image
                src={blogURL ? opaqueLogo : transparentLogo}
                alt="metricks logo"
                width={100}
                height={50}
              />
            </a>
          </Link>
          <div className={`${styles.bar} ${show ? styles.active : ""}`}>
            <FaBars
              size={35}
              color={`${blogURL ? "black" : "white"}`}
              onClick={() => setShow((prev) => !prev)}
            />
          </div>
          <div
            className={`${styles.linksContainer} ${
              show ? "" : styles.toggleBar
            }`}
          >
            <Link href="/about" passHref>
              <a onClick={() => setShow(false)}>About us</a>
            </Link>
            <Link href="/blog" passHref>
              <a onClick={() => setShow(false)}>Blog</a>
            </Link>
            <Link href="#contact" passHref>
              <a
                className={styles.contactUsAnchor}
                onClick={() => {
                  setShow(false);
                  setShowContactUs((prev) => !prev);
                }}
              >
                Contact us
              </a>
            </Link>
          </div>
        </nav>
        {showContactUs && (
          <div className={styles.absolute}>
            {" "}
            <Contact setShowContactUs={setShowContactUs} />
          </div>
        )}
      </div>
      {children}
    </>
  );
};

export default Layout;
