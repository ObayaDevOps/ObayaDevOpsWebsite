import Head from 'next/head'
import {  Box, Icon } from '@chakra-ui/react'
import LandingPage from '../components/pageContent/landingPage'
import Image from 'next/image'
import HeadImage from '../public/images/icon/africa.png'
import { buildUrl } from 'cloudinary-build-url';

export default function Home() {

  return (
    <div >
      <Head>
        <title>Home | MedOptics Ltd</title>
        <meta name="description" content="MedOptics Ltd Webpage" />
        {/* <link rel="shortcut icon" href="../public/favicon.ico"></link> */}
        <link rel="shortcut icon" href="../../../images/icon/logosquare.svg"></link>
      </Head>

      <Box>
        <LandingPage />
      </Box>

    </div>
  )
}
