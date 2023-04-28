import Head from 'next/head'
import HomePage from 'src/pages/Home';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sample Test App</title>
        <meta name="description" content="created by Aziz Mobarak" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <HomePage/>
    </>
  )
}
