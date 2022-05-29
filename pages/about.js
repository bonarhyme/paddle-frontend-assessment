import React from "react";
import styles from "../styles/About.module.css";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";

const About = () => {
  return (
    <div className={styles.container}>
      <header className={styles.sectionOne}>
        <div className={styles.headingContainer}>
          <span className={styles.line}></span>
          <h1 className={styles.heading}>About us</h1>
        </div>
        <div className={styles.mainParagraph}>
          <p>
            Built for SaaS <br /> and E-commerce
          </p>
        </div>
        <div className={styles.rightAlignedParagraph}>
          <p>
            Our tools are easy to set up and use with a user{" "}
            <br className={styles.hideBrSM} /> friendly dashboard that enables
            you to set-up, <br className={styles.hideBrSM} /> launch, automate
            and manage multi-affiliate <br className={styles.hideBrSM} />{" "}
            campaigns in 5 minutes.
          </p>
        </div>
      </header>
      <main>
        <section className={styles.sectionTwo}>
          <div className={styles.sectionTwoFirstDiv}>
            <p className={styles.sectionTwoFirstP}>
              Metricks was developed because just like{" "}
              <br className={styles.hideBrSM} /> you, we needed a product that
              could give <br className={styles.hideBrSM} /> us good value.
            </p>
          </div>
        </section>
        <section className={styles.sectionThree}>
          <div>
            <div className={styles.headingContainer}>
              <span className={styles.line}>01</span>
              <h2 className={styles.heading}>Why us?</h2>
            </div>
            <div className={styles.sectionThreePAndDots}>
              <p className={styles.sectionThreeP}>
                We pride ourselves in our ability to innovate and{" "}
                <br className={styles.hideBrSM} /> create world-class tools that
                provide reliable and <br className={styles.hideBrSM} />{" "}
                efficient touchpoints between advertisers and{" "}
                <br className={styles.hideBrSM} /> affiliates
              </p>
              <div className={styles.dots}>
                ............. <br />
                ............. <br />
                ............. <br />
                ............. <br />
                ............. <br />
              </div>
            </div>
          </div>
          <div className={styles.sectionThreeSecondDiv}>
            <div className={styles.headingContainer}>
              <span className={styles.line}>02</span>
              <h2 className={styles.heading}>Growing with you</h2>
            </div>

            <div>
              <p className={styles.sectionThreeP}>
                Leveraging the best technology, we have developed an all-in-one{" "}
                <br className={styles.hideBrSM} /> affiliate marketing tracking
                software, a genius tool to help{" "}
                <br className={styles.hideBrSM} /> you track, automate and
                optmize your influencer campaigns,{" "}
                <br className={styles.hideBrSM} /> all from one dashboard.
              </p>
            </div>

            <div className={styles.moveBelow}>
              <p className={styles.sectionThreeP}>
                Our team of experts are constantly brainstorming, testing and{" "}
                <br className={styles.hideBrSM} /> develping new solutons with
                only one thing in mind - your <br className={styles.hideBrSM} />{" "}
                business growth. Your success is our success and by giving you{" "}
                <br className={styles.hideBrSM} /> the tools you need to scale,
                we grow as well.
              </p>
            </div>
          </div>
        </section>
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default About;
