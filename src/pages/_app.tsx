import { Provider as NextAuthProvider } from 'next-auth/client'
import { AppProps } from 'next/app'
// import NextNprogress from "nextjs-progressbar";
import { Header } from '../components/Header'

import '../styles/global.scss'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <NextAuthProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </NextAuthProvider>
  )
}

export default MyApp
