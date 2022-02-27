import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Best Guys</title>
        <meta name="description" content="Cadastro de Job" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello World
        </h1>

        <p className={styles.description}>
          Get start
        </p>
        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.weslleyoliveira.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '} Weslley Oliveira
          {/* <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span> */}
        </a>
      </footer>
    </div>
  )
}
