import { memo } from 'react'
import useMedia, { useMatch } from '@/common/useMedia'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'

export default memo(function CharityWork() {
  const matchLG = useMatch('lg')
  const matchMD = useMatch('md')
  const { mobileQuery } = useMedia()

  return (
    <Stack
      component='section'
      alignItems='center'
      spacing={80}
      sx={{
        py: { lg: 140, md: 80, xs: 60 },
        // px: { xl: 300, lg: 80, md: 72, xs: 16 },
      }}
    >
      <Stack spacing={{ xs: 24, md: 40, lg: 36, xl: 48 }} alignItems='center' sx={{
        width: 1368,
      }}>
        <Typography
          variant={matchLG ? 'displayLarge' : matchMD ? 'displaySmall' : 'headlineLarge'}
          color='common.white'
        >
          CHARITY WORK
        </Typography>
        <Box sx={{
          width: { xs: 76, md: 118, lg: 112 },
          border: 4,
          borderColor: '#4B8EF2',
          boxShadow: '0px 6px 21px #4B8EF2',
        }}></Box>
      </Stack>
      <Typography variant='bodyLarge' color='common.gray-200' sx={{
        width: 1090,
      }}>
        Leo Messi, a football star for FC Barcelona and the Argentine national team, is considered one of the best and most respected players of his generation. He has won FIFA's Player of the Year award, the Ballon d'Or, six times. In February 2020, he was awarded the Laureus World Sportsman of the Year.
      </Typography>
      <Box sx={{
        width: 1368,
        borderTop: 1,
        borderLeft: 1,
        borderRight: 1,
        borderColor: 'common.gray-800',
      }}>
        <Stack direction='row' justifyContent='space-between' sx={{
          p: '24px 20px',
          borderBottom: 1,
          borderColor: 'common.gray-800',
        }}>
          <Typography variant='headlineSmall' color='common.white'>
            $1.1 MILLION FOR A HOSPITAL CLINIC IN CATALUNYA AND A HEALTH CENTRE IN ARGENTINA
          </Typography>
          <Typography variant='bodyMedium' color='common.gray-400'>
            March 27, 2023
          </Typography>
        </Stack>
        <Stack direction='row' justifyContent='space-between' sx={{
          p: '24px 20px',
          borderBottom: 1,
          borderColor: 'common.gray-800',
        }}>
          <Typography variant='headlineSmall' color='common.white'>
            MESSI FOUNDATION PROVIDES DONATIONS AND HELPS FOR A WIDE RANGE OF CHARITY
          </Typography>
          <Typography variant='bodyMedium' color='common.gray-400'>
            March 27, 2023
          </Typography>
        </Stack>
        <Stack direction='row' justifyContent='space-between' sx={{
          p: '24px 20px',
          borderBottom: 1,
          borderColor: 'common.gray-800',
        }}>
          <Typography variant='headlineSmall' color='common.white'>
            LEO MESSI FOUNDATION DONATED $218,000 TO UNICEF PROJECTS IN KENYA
          </Typography>
          <Typography variant='bodyMedium' color='common.gray-400'>
            March 27, 2023
          </Typography>
        </Stack>
      </Box>
    </Stack>
  )
})