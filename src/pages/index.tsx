import { useState } from 'react'
import clsx from 'clsx'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'
import Typography from '@mui/material/Typography'
import Header from '@/components/header/Header'
import useThemeMode from '@/common/useThemeMode'
import HeroSection from '@/components/heroSection/HeroSection'

export default function Home() {
  const { isDarkMode } = useThemeMode()
  const [walletInfo, setWalletInfo] = useState(null && {
    avatar: '/user-avatar.png',
    address: '0x22323232323232322',
  })
  const [tabValue, setTabValue] = useState<'boots' | 'board'>('boots')

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
      <main className={clsx(styles.main, { dark: isDarkMode })}>
        <HeroSection />
        <h1>BOOTS</h1>
        <Typography>123123</Typography>
        <Image alt="Messi portrait" src="/messi-portrait.png" width="800" height="600" />
      </main>
    </>
  )
}
