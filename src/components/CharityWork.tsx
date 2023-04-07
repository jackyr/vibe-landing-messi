import { memo } from 'react'
import { useMatch } from '@/common/useMedia'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'

const listItems = [
  { text: '$1.1 MILLION FOR A HOSPITAL CLINIC IN CATALUNYA AND A HEALTH CENTRE IN ARGENTINA', date: 'March 27, 2023' },
  { text: 'MESSI FOUNDATION PROVIDES DONATIONS AND HELPS FOR A WIDE RANGE OF CHARITY', date: 'March 27, 2023' },
  { text: 'LEO MESSI FOUNDATION DONATED $218,000 TO UNICEF PROJECTS IN KENYA', date: 'March 27, 2023' },
]

export default memo(function CharityWork() {
  const matchLG = useMatch('lg')
  const matchMD = useMatch('md')

  return (
    <Stack
      component='section' alignItems='center' sx={{
        py: { lg: 140, md: 80, xs: 60 },
        // px: { xl: 300, lg: 80, md: 72, xs: 16 },
      }}
    >
      <Stack spacing={{ lg: 80, md: 60, xs: 48 }} sx={{
        width: { xl: 1368, lg: 1120, md: 754, xs: 358 },
      }}>
        <Stack spacing={{ xs: 24, md: 40, lg: 36, xl: 48 }} alignItems='center'>
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
        <Typography
          variant={ matchMD ? 'bodyLarge' : 'bodyMedium'}
          color='common.gray-200'
          sx={{
            px: { xl: 139, lg: 95, md: 50 },
            textAlign: 'center',
          }}
        >
          Leo Messi, a football star for FC Barcelona and the Argentine national team, is considered one of the best and most respected players of his generation. He has won FIFA&#39;s Player of the Year award, the Ballon d&#39;Or, six times. In February 2020, he was awarded the Laureus World Sportsman of the Year.
        </Typography>
        <Box sx={{
          borderTop: 1,
          borderLeft: 1,
          borderRight: 1,
          borderColor: 'common.gray-800',
        }}>
          {listItems.map((v, i) => (
            <Stack
              key={i}
              direction={{ md: 'row', xs: 'column' }}
              justifyContent='space-between'
              alignItems={{ md: 'center', xs: 'flex-start' }}
              spacing={{ md: 0, xs: 14 }}
              sx={{
                p: { lg: 20, md: '21px 24px', xs: 16 },
                borderBottom: 1,
                borderColor: 'common.gray-800',
              }}
            >
              <Typography
                variant={ matchMD ? 'headlineSmall' : 'titleMedium' }
                color='common.white'
              >{v.text}</Typography>
              <Typography
                variant={ matchMD ? 'bodyMedium' : 'bodySmall' }
                color='common.gray-400'
                sx={{
                  flex: 'none',
                }}
              >{v.date}</Typography>
            </Stack>
          ))}
        </Box>
      </Stack>
    </Stack>
  )
})