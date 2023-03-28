import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const mobileBreakpoint = 'sm'

export default function useMobileQuery() {
  const theme = useTheme()
  const mobileQuery = theme.breakpoints.down(mobileBreakpoint)
  const pcQuery = theme.breakpoints.up(mobileBreakpoint)
  const matches = useMediaQuery(mobileQuery)

  return {
    isMobile: matches,
    mobileQuery,
    pcQuery,
  }
}