import { useMemo } from 'react'
import { LightColor, DarkColor } from '@/themes/colors'
import { TypographyVariants } from '@/themes/typography'
import { ComponentOptions } from '@/themes/components'
import { createTheme } from '@mui/material/styles'
import { deepmerge } from '@mui/utils'

const RootThemes = {
  ...ComponentOptions,
  typography: TypographyVariants,
  spacing: 1,
  shape: {
    borderRadius: 4
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 834,
      lg: 1280,
      xl: 1920
    }
  }
}

const customTheme = (colors: any, extra: any) => {
  return {
    palette: {
      ...extra,
      primary: {
        main: colors.white,
        contrastText: colors.black,
        dark: colors["gray-50"],
        light: colors["gray-50"]
      },
      secondary: {
        main: colors["gray-600"],
        contrastText: colors["gray-300"],
        dark: colors["gray-700"],
        light: colors["gray-700"]
      },
      success: {
        main: colors.success
      },
      warning: {
        main: colors.warn
      },
      error: {
        main: colors.error
      }
    }
  }
}

export default function useTheme() {
  const lightTheme = useMemo(() => {
    const _theme = customTheme(LightColor, { 
      mode: 'light',
      common: { ...LightColor },
    })
    return createTheme(deepmerge(_theme, RootThemes))
  }, [])
  const darkTheme = useMemo(() => {
    const _theme = customTheme(DarkColor, { 
      mode: 'dark',
      common: { ...DarkColor },
    })
    return createTheme(deepmerge(_theme, RootThemes))
  }, [])
  return {
    lightTheme,
    darkTheme,
  }
}