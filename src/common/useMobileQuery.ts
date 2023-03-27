import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

export default function useMobileQuery() {
  const theme = useTheme()
  const mobileQuery = theme.breakpoints.down('sm')
  const pcQuery = theme.breakpoints.up('sm')
  const matches = useMediaQuery(mobileQuery)

  return {
    isMobile: matches,
    mobileQuery,
    pcQuery,
  }
}