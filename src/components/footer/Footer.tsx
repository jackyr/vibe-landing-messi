import { memo } from 'react'
import useThemeMode from '@/common/useThemeMode'
import Box from '@mui/material/Box'

export default memo(function Footer() {
  const { isDarkMode } = useThemeMode()

  return (
    <Box sx={{
      height: { lg: 533, md: 291, xs: 219 },
      position: 'relative',
      background: isDarkMode ? 
        'linear-gradient(180deg, #070707 9.38%, rgba(7, 7, 7, 0) 100%), url(/footer-pic.jpeg)' : 
        'linear-gradient(180deg, #F7FBFD 9.38%, rgba(247, 251, 253, 0) 58.63%), url(/footer-pic.jpeg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
    }}>
    </Box>
  )
})