import { useEffect } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.location.href = "https://freelancesigap.vercel.app/";
  })
  // return <Component {...pageProps} />
  return (<></>)
}

export default MyApp
