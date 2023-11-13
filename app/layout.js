import './globals.css'
import Head from 'next/head'
import { Header, Footer, } from './sections'
import { DM_Sans } from 'next/font/google'


const dm_sans = DM_Sans({
  subsets: ['latin'],
  weight: ['400','500','700']
})

export const metadata = {
  title: 'Agency Landing Page',
  description: 'A NextJs Agency Startup Landing Page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={dm_sans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
