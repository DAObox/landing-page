import { useEffect, useState } from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  })
  return mounted && <Component {...pageProps} />
}

export default MyApp
