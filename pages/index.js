import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

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
            <a className={styles.view}>View Our Latest Product</a>
          </Link>
        </header>
      </div>
    </>
  );
}
