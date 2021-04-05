import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  let title = "Next.js page";
  let message = "React Next.js sample page.";
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          crossOrigin="anonymous"
        />
      </Head>

      <main>
        <h1 className="bg-primary text-white display-4">React</h1>
        <div className="container">
          <h4 className="my-3">{title}</h4>
          <div className="alert alert-primary text-center">
            <p className="h5">{message}</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
