import { useEffect, useState } from 'react'
import Head from 'next/head'
import Container from '@mui/material/Container'
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
  const [startTimeStamp, setStartTimeStamp] = useState<number>(NaN)
  const { countdownListItems } = useCountdown(startTimeStamp)

  useEffect(() => {
    setStartTimeStamp(1692316800000)
  }, [])

  return (
    <>
      <Head>
        <title>Messi</title>
        <meta name="description" content="Messi" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, viewport-fit=cover" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container component="main" maxWidth='xl' disableGutters sx={{
        overflow: 'hidden',
        backgroundImage: isDarkMode ? 'url(/hero-section-bg-dark.png)' : 'url(/hero-section-bg-light.png)',
        backgroundSize: '100% 1995px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: { lg: 'center -60px', md: 'center -135px', xs: 'center -295px' },
      }}>
        <HeroSection countdownListItems={countdownListItems} />
        <AboutMessi />
        <WhatsIn />
        <ShoeMenu handleFullPage={id => console.log(id)} />
        <RoadMap countdownListItems={countdownListItems} />
        <CharityWork />
      </Container>
      <Footer />
    </>
  )
}
