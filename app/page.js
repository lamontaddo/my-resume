import Link from "next/link";
import styles from "./page.module.css";
import Head from "next/head";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Head>
        <title>Lamont Addo | Full-Stack Developer</title>
        <meta name="description" content="Portfolio of Lamont Addo, MERN Stack Developer." />
      </Head>

      <main className={styles.main}>
      <div className={styles.imageWrapper}>
      <Image
  className={styles.profileImage}
  src="/lamont.jpg"
  alt="Lamont Addo"
  width={200}
  height={200}
  priority
/>      </div>
        <h1 className={styles.title}>Hi, I&#39;m Lamont 👋🏽</h1>

        <p className={styles.subtitle}>Full-Stack Developer | React • Node.js • MongoDB</p>

        <div className={styles.links}>
          <Link href="/resume" target="_blank" rel="noopener noreferrer">Resume</Link>
          <Link href="https://github.com/lamontaddo" target="_blank" rel="noopener noreferrer">GitHub</Link>
          <Link href="https://www.linkedin.com/in/lamont-addo" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
        </div>
      </main>
    </>
  );
}
