import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const router = useRouter();

  const onPlayClick = () => {
    router.push('/play');
  }

  return (
    <>
      <Head>
        <title>Categories Game</title>
        <meta name="description" content="Play the categories game." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>
        Welcome to the Categories Game
      </h1>
      <div className={styles.actions}>
        <button onClick={onPlayClick}>Play</button>
        <button className="outlined">How to Play</button>
      </div>
    </>
  )
}

export default Home
