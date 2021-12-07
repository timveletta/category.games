import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Categories Game</title>
        <meta name="description" content="Play the categories game." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the Catgeories Game
        </h1>
      </main>

      <footer className={styles.footer}>
        <p>Made with &#x2764; by <a href="https://www.timveletta.com/">Tim Veletta</a></p>
      </footer>
    </div>
  )
}

export default Home
