import { useCallback, useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import useTheme from '@/common/useTheme'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import ThemeContext from '@/common/ThemeContext'
import { defaultThemeMode, storageKeyMap } from '@/common/const'
import Header from '@/components/header/Header'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const { lightTheme, darkTheme } = useTheme()
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>()
  const [walletInfo, setWalletInfo] = useState<{ avatar: string, address: string } | null>(null)
  const [menuValue, setMenuValue] = useState<'boots' | 'board'>(() => {
    return router.pathname.indexOf('/leaderboard') > -1 ? 'board' : 'boots'
  })

  useEffect(() => {
    router.events.on('routeChangeStart', (url) => {
      setMenuValue(url.indexOf('/leaderboard') > -1 ? 'board' : 'boots')
    })
  }, [router])

  useEffect(() => {
    const initialThemeMode = localStorage.getItem(storageKeyMap.theme) as 'light' | 'dark' | null
    setThemeMode(initialThemeMode || defaultThemeMode)
  }, [])

  useEffect(() => {
    if (themeMode) {
      localStorage.setItem(storageKeyMap.theme, themeMode)
    }
  }, [themeMode])

  const toggleThemeMode = useCallback(() => {
    setThemeMode(themeMode === 'dark' ? 'light' : 'dark')
  }, [themeMode])

  const theme = themeMode === 'dark' ? darkTheme : lightTheme

  function handleConnect(value: string) {
    console.log(value)
    setWalletInfo({
      avatar: '/user-avatar.png',
      address: '0x22323232323232322',
    })
  }

  return (themeMode && <ThemeContext.Provider value={{ 
    isDarkMode: themeMode === 'dark',
    themeMode,
    toggleThemeMode,
  }}>
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Header
        tabValue={menuValue}
        walletInfo={walletInfo}
        handleConnect={handleConnect}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  </ThemeContext.Provider>)
}
