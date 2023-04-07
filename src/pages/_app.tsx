import { useCallback, useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import useTheme from '@/common/useTheme'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import ThemeContext from '@/common/ThemeContext'
import { defaultThemeMode, storageKeyMap } from '@/common/const'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  const { lightTheme, darkTheme } = useTheme()
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>()

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

  return (themeMode && <ThemeContext.Provider value={{ 
    isDarkMode: themeMode === 'dark',
    themeMode,
    toggleThemeMode,
  }}>
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Component {...pageProps} />
    </ThemeProvider>
  </ThemeContext.Provider>)
}
