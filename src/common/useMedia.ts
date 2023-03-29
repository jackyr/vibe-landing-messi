import { type Breakpoint, useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

export default function useMedia() {
  const theme = useTheme()
  const mobileQuery = theme.breakpoints.down('md')
  const tabletQuery = theme.breakpoints.between('md', 'lg')
  const laptopQuery = theme.breakpoints.between('lg', 'xl')
  const desktopQuery = theme.breakpoints.up('xl')
  const isMobile = useMediaQuery(mobileQuery)

  return {
    isMobile,
    mobileQuery,
    tabletQuery,
    laptopQuery,
    desktopQuery,
  }
}

export function useMatch(breakpoint: Breakpoint) {
  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.up(breakpoint))
  return isMatch
}