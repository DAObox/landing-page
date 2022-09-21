import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])


  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-black">
      <Head>
        <title>DAO BOX</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@600&display=swap" rel="stylesheet" />
      </Head>
      <div className='text-gray-200 text-6xl py-10 font-quicksand'>
        <h1 >DAO BOX </h1>
      </div>
      {mounted && (
        <Hero />
      )}
      <div className="px-8 py-16">
        <div className="grid gap-8 items-start justify-center">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <Link href={'https://discord.gg/2YGMwxEH7C'} >
              <button className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center  divide-gray-600">
                <span className="flex items-center space-x-5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600 -rotate-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </span>
                <span className="pl-6 text-indigo-400 group-hover:text-gray-100 transition duration-200">Early Access &rarr;</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Home

function Hero() {
  const [text, count] = useTypewriter({
    words: [
      'Gassless Voting',
      'Fundraising',
      'Asset Management',
      'Liquidity Mining',
      'Contextual Discussions',
    ],
    loop: true,
    delaySpeed: 2000
  })

  return (
    <div className='text-gray-200 font-mono py-6 font-semibold text-4xl'>
      <span className={styles.neonText}>{text}</span>
      <Cursor />
    </div>
  )
}

