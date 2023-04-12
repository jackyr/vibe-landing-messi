import { memo } from 'react'
import Box from '@mui/material/Box'
import { useMatch } from '@/common/useMedia'
import useThemeMode from '@/common/useThemeMode'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import MessiSignatureIcon from '/public/messi-signature.svg'

interface PropsType {
  countdownListItems: { label: string, value: number }[]
}

export default memo(function HeroSection({
  countdownListItems,
}: PropsType) {
  const matchMD = useMatch('md')
  const { isDarkMode } = useThemeMode()

  return (<>
    <Stack component="section" alignItems="center">
      <Stack sx={{
        mt: { lg: 50, md: 34, xs: 26 },
        py: 50,
        backgroundImage: 'url(/boots-blue.png)',
        backgroundSize: { lg: '860px auto', md: '750px auto', xs: '400px auto' },
        backgroundPosition: { lg: '-35px -112px', md: '-56px -95px', xs: '-60px -23px' },
        backgroundRepeat: 'no-repeat',
        isolation: 'isolate',
      }}>
        <Typography sx={{
          fontFamily: 'Impact',
          fontSize: { lg: 48, md: 42, xs: 21 },
          lineHeight: 1,
          ml: { lg: 13, md: 9, xs: 5 },
          color: 'common.black',
          WebkitTextStroke: isDarkMode ? '0.58px white' : '0.58px var(--vb-gray-300)',
        }}>THE</Typography>
        <Typography variant='h1' sx={{
          fontFamily: 'Impact',
          fontSize: { lg: 292, md: 245, xs: 131 },
          lineHeight: 0.853,
          color: 'transparent',
          WebkitTextStroke: isDarkMode ? '0.58px white' : '0.58px var(--vb-black)',
          position: 'relative',
          ':after': {
            content: '"BOOTS"',
            fontFamily: 'Impact',
            fontSize: { lg: 292, md: 245, xs: 131 },
            lineHeight: 0.853,
            color: isDarkMode ? 'white' : '#2f3131',
            mixBlendMode: isDarkMode ? 'darken' : 'lighten',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: -1,
          },
        }}>BOOTS</Typography>
      </Stack>
      <Stack alignItems="center" sx={{ 
        mt: { lg: 172, md: 162, xs: 142 }
      }}>
        <Typography
          variant={ matchMD ? 'headlineLarge' : 'headlineSmall'}
          color={isDarkMode ? 'white' : 'common.white'}
        >
          THE NON -FUNGIBLE EXPERIENCE
        </Typography>
        <Box sx={{
          mt: { lg: 41, md: 39, xs: 19 },
          position: 'relative',
        }}>
          <MessiSignatureIcon color={isDarkMode ? 'white' : 'var(--vb-white)'} />
          <Typography
            variant={ matchMD ? 'bodyLarge' : 'bodyMedium'}
            sx={{
              fontWeight: 700,
              color: isDarkMode ? 'white' : 'common.white',
              position: 'absolute',
              left: 35,
              bottom: 3,
              whiteSpace: 'nowrap'
            }}>By Lionel Messi
          </Typography>
        </Box>
        <Stack direction="row" spacing={20} sx={{
          mt: { lg: 67, md: 72, xs: 53 }
        }}>
          {countdownListItems.map(v => (
            <Stack key={v.label} justifyContent="center" alignItems="center" sx={{
              width: { md: 86, xs: 68 },
              height: { md: 86, xs: 71 },
              bgcolor: 'common.on-surface-5',
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
  </>)
})