import { memo } from 'react'
import useMedia, { useMatch } from '@/common/useMedia'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import FootballSmallIcon from '/public/icon-football-small.svg'

interface PropsType {
  countdownListItems: { label: string, value: number }[]
}

const leftIconStyle = {
  position: 'relative',
  top: -7,
}

export default memo(function RoadMap({
  countdownListItems,
}: PropsType) {
  const matchLG = useMatch('lg')
  const matchMD = useMatch('md')
  const { mobileQuery } = useMedia()
  
  return (
    <Stack
      component='section'
      alignItems='center'
      sx={{
        pt: { lg: 260, md: 80, xs: 60 },
        // px: { xl: 300, lg: 80, md: 72, xs: 16 },
      }}
    >
      <Stack spacing={{ xs: 24, md: 40, lg: 36, xl: 48 }} alignItems='center' sx={{
        width: 1606,
      }}>
        <Typography
          variant={matchLG ? 'displayLarge' : matchMD ? 'displaySmall' : 'headlineLarge'}
          color='common.white'
        >
          THE ROAD MAP
        </Typography>
        <Box sx={{
          width: { xs: 76, md: 118, lg: 112 },
          border: 4,
          borderColor: '#4B8EF2',
          boxShadow: '0px 6px 21px #4B8EF2',
        }}></Box>
      </Stack>
      <Stack direction='row' spacing={46} sx={{
        pt: 120,
        pb: 285,
        width: 1606,
        backgroundImage: 'url(/messi-celebration.png)',
        backgroundSize: '637px 1105px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 50px',
      }}>
        <Stack alignItems='center'>
          <Stack justifyContent='center' alignItems='center' sx={{
            width: 48,
            height: 48,
            background: 'linear-gradient(180deg, #249FE4 0%, rgba(36, 159, 228, 1) 100%)',
            borderRadius: '50%',
          }}>
            <FootballSmallIcon color='var(--vb-white)' />
          </Stack>
          <Stack justifyContent='center' alignItems='center' sx={{
            width: 12,
            height: 207,
            background: 'linear-gradient(180deg, #249FE4 0%, rgba(36, 159, 228, 0) 100%)',
            ...leftIconStyle,
          }}>
            <Box sx={{
              width: '1px',
              height: '100%',
              bgcolor: 'common.white',
            }}></Box>
          </Stack>
          <FootballSmallIcon color='var(--vb-gray-400)' style={leftIconStyle} />
          <Box sx={{
            width: '1px',
            height: 209,
            background: 'var(--vb-gray-400)',
            ...leftIconStyle
          }}></Box>
          <FootballSmallIcon color='var(--vb-gray-400)' style={leftIconStyle} />
        </Stack>
        <Stack spacing={112} sx={{ mt: '5px!important' }}>
          <Stack spacing={16}>
            <Typography variant='displaySmall' color='common.white'>
              INITIAL LAUNCH
            </Typography>
            <Typography variant='bodyLarge' color='common.gray-200'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />sed do eiusmod tempor incididunt ut labore et dolore <br />magna aliqua. Ut enim ad minim veniam.
            </Typography>
          </Stack>
          <Stack spacing={16}>
            <Typography variant='displaySmall' color='common.white'>
              GIVEAWAYS MERCHANDISE
            </Typography>
            <Typography variant='bodyLarge' color='common.gray-200'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />sed do eiusmod tempor incididunt ut labore et dolore <br />magna aliqua. Ut enim ad minim veniam.
            </Typography>
          </Stack>
          <Stack spacing={16}>
            <Typography variant='displaySmall' color='common.white'>
              MYSTERY BOX
            </Typography>
            <Typography variant='bodyLarge' color='common.gray-200'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />sed do eiusmod tempor incididunt ut labore et dolore <br />magna aliqua. Ut enim ad minim veniam.
            </Typography>
          </Stack>
          <Stack direction="row" spacing={20}>
            {countdownListItems.map(v => (
              <Stack key={v.label} justifyContent="center" alignItems="center" sx={{
                width: 86,
                height: 86,
                bgcolor: 'common.surface-5',
                backdropFilter: 'blur(30px)',
                borderRadius: '5px',
              }}>
                <Typography variant='headlineLarge' color='common.white'>
                  {v.value}
                </Typography>
                <Typography variant="bodyLarge" color='common.white'>
                  {v.label}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
})