import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

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
          <nav>
            <div>{/* <Image src="./a" /> */}</div>
            <div></div>
          </nav>
        </header>
        <main></main>
        <footer></footer>
      </div>
    </>
  );
}
