import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Head from 'next/head'
const Layout = ({children}:any) => {
  return (
    <div>
        <Head>
        <title>QR Code Project</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
        <Navbar />
        <Footer />
        {children}
    </div>
  )
}

export default Layout