import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'


export default function Home() {
  return (
    <>
        <Head>
          <title>Finstream</title>
        </Head>
        <main>
          <h1>Test</h1>
        </main>
        <Navbar />
    </>
  )
}