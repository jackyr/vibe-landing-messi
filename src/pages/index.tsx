import { useState } from 'react'
import Head from 'next/head'
import Container from '@mui/material/Container'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import useThemeMode from '@/common/useThemeMode'
import useCountdown from '@/common/useCountdown'
import HeroSection from '@/components/HeroSection'
import AboutMessi from '@/components/AboutMessi'
import WhatsIn from '@/components/WhatsIn'
import ShoeMenu from '@/components/shoeMenu/ShoeMenu'
import RoadMap from '@/components/RoadMap'
import CharityWork from '@/components/CharityWork'

export default function Home() {
  const { isDarkMode } = useThemeMode()
  const [tabValue, setTabValue] = useState<'boots' | 'board'>('boots')
  const [startTimeStamp, setStartTimeStamp] = useState(1681844374775)
  const [walletInfo, setWalletInfo] = useState(null && {
    avatar: '/user-avatar.png',
    address: '0x22323232323232322',
  })
  const { countdownListItems } = useCountdown(startTimeStamp)

  return (
    <>
      <Head>
        <title>Messi</title>
        <meta name="description" content="Messi" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, viewport-fit=cover" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        tabValue={tabValue}
        walletInfo={walletInfo}
        handleTabChange={setTabValue}
      />
      <Container component="main" maxWidth='xl' sx={{
        backgroundImage: isDarkMode ? 'url(/hero-section-bg-dark.png)' : 'url(/hero-section-bg-light.png)',
        backgroundSize: '100% 1995px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center -60px',
      }}>
        <HeroSection countdownListItems={countdownListItems} />
        <AboutMessi />
        <WhatsIn />
        <ShoeMenu />
        <RoadMap countdownListItems={countdownListItems} />
        <CharityWork />
      </Container>
      <Footer />
    </>
  )
}
