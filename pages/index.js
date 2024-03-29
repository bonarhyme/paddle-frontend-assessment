import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Metricks</title>
        <meta name="description" content="Metricks landing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <header>
          <h1 className={styles.heading}>Welcome To Metricks</h1>

          <Link href="/comingsoon">
            <a className={styles.view}>View Task One</a>
          </Link>
          <Link href="/github">
            <a className={styles.view} style={{ backgroundColor: "#ff00f7" }}>
              View Task Two
            </a>
          </Link>
        </header>
      </div>
      <Footer />
    </>
  );
}
