import { memo } from 'react'
import useMedia, { useMatch } from '@/common/useMedia'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import FootballSmallIcon from '/public/icon-football-small.svg'

interface PropsType {
  countdownListItems: { label: string, value: number }[]
}

const listItems = [
  { title: 'INITIAL LAUNCH', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' },
  { title: 'GIVEAWAYS MERCHANDISE', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' },
  { title: 'MYSTERY BOX', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' },
]

const leftIconStyle = {
  position: 'relative',
  top: -7,
}

export default memo(function RoadMap({
  countdownListItems,
}: PropsType) {
  const matchXL = useMatch('xl')
  const matchLG = useMatch('lg')
  const matchMD = useMatch('md')
  
  return (
    <Stack
      component='section'
      alignItems='center'
      sx={{
        pt: { md: 260, xs: 140 },
        // px: { xl: 300, lg: 80, md: 72, xs: 16 },
      }}
    >
      <Stack gap={{ lg: 120, md: 86, xs: 70 }} sx={{
        width: { xl: 1368, lg: 1280 - 80, md: 834 - 44, xs: 390 - 22 },
        pr: { xl: 0, lg: 80, md: 44, xs: 22 },
        ml: { xl: 0, lg: 80, md: 44, xs: 22 },
      }}>
        <Stack spacing={{ xs: 24, md: 40, lg: 36, xl: 48 }} alignItems='center'>
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
        <Stack direction='row' spacing={{ md: 46, xs: 21 }} sx={{
          mr: { xl: 0, lg: -80, md: -44, xs: -22 },
          pb: { lg: 380, md: 190, xs: 80},
          backgroundImage: 'url(/messi-celebration.png)',
          backgroundSize: { lg: '637px auto', md: '427px auto', xs: '0 0' },
          backgroundRepeat: 'no-repeat',
          backgroundPosition: { lg: 'right 50px', md: 'calc(100% + 127px) top' },
        }}>
          <Stack alignItems='center'>
            <Stack justifyContent='center' alignItems='center' sx={{
              width: { md: 48, xs: 28 },
              height: { md: 48, xs: 28 },
              background: 'linear-gradient(180deg, #249FE4 0%, rgba(36, 159, 228, 1) 100%)',
              borderRadius: '50%',
            }}>
              <FootballSmallIcon
                width={ matchMD ? 32 : 23 }
                height={ matchMD ? 32 : 23 }
                color='var(--vb-white)'
              />
            </Stack>
            <Stack justifyContent='center' alignItems='center' sx={{
              width: 12,
              height: { xl: 207, lg: 196, md: 163, xs: 150 },
              background: 'linear-gradient(180deg, #249FE4 0%, rgba(36, 159, 228, 0) 100%)',
              ...leftIconStyle,
            }}>
              <Box sx={{
                width: '1px',
                height: '100%',
                bgcolor: 'common.white',
              }}></Box>
            </Stack>
            <FootballSmallIcon
              width={ matchMD ? 32 : 23 }
              height={ matchMD ? 32 : 23 }
              color='var(--vb-gray-400)'
              style={leftIconStyle}
            />
            <Box sx={{
              width: '1px',
              height: { xl: 209, lg: 200, md: 168, xs: 140 },
              background: 'var(--vb-gray-400)',
              ...leftIconStyle
            }}></Box>
            <FootballSmallIcon
              width={ matchMD ? 32 : 23 }
              height={ matchMD ? 32 : 23 }
              color='var(--vb-gray-400)'
              style={leftIconStyle}
            />
          </Stack>
          <Stack spacing={{ lg: 112, md: 56, xs: 40 }} sx={{
            mt: '5px!important',
            width: { lg: 440, md: 350, xs: 281 },
          }}>
            {listItems.map((v, i) => (
              <Stack key={i} spacing={16}>
                <Typography
                  variant={ matchXL ? 'displaySmall' : matchMD ? 'headlineLarge' : 'headlineMedium' }
                  color='common.white'
                >{v.title}</Typography>
                <Typography
                  variant={ matchMD ? 'bodyLarge' : 'bodyMedium' }
                  color='common.gray-200'
                >{v.desc}</Typography>
              </Stack>
            ))}
            <Stack direction="row" spacing={20}>
              {countdownListItems.map(v => (
                <Stack key={v.label} justifyContent="center" alignItems="center" sx={{
                  width: { md: 86, xs: 68 },
                  height: { md: 86, xs: 71 },
                  bgcolor: 'common.surface-5',
                  backdropFilter: 'blur(30px)',
                  borderRadius: '5px',
                }}>
                  <Typography
                    variant={ matchMD ? 'headlineLarge' : 'headlineMedium' }
                    color='common.white'
                  >
                    {v.value}
                  </Typography>
                  <Typography
                    variant={ matchMD ? 'bodyLarge' : 'bodyMedium' }
                    color='common.white'
                  >
                    {v.label}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
})