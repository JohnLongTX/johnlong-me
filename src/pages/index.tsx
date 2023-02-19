import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Terminal from './components/Terminal'


export default function Home() {
  return (
    <>
      <Head>
        <title>JohnLong.Me</title>
        <meta name="description" content="Terminal Portfolio Site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Terminal />
    </>
  )
}
