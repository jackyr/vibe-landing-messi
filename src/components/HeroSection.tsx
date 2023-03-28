import Box from '@mui/material/Box'
import useMobileQuery from '@/common/useMobileQuery'
import useThemeMode from '@/common/useThemeMode'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import MessiSignatureIcon from '/public/messi-signature.svg'

interface PropsType {
  countdownListItems: { label: string, value: number }[]
}

export default function HeroSection({
  countdownListItems,
}: PropsType) {
  const { isDarkMode, toggleThemeMode } = useThemeMode()
  const { isMobile, mobileQuery } = useMobileQuery()

  return (<>
    <Stack component="section" alignItems="center">
      <Stack sx={{
        mt: 50,
        py: 50,
        backgroundImage: 'url(/boots-blue.png)',
        backgroundSize: '860px 680px',
        backgroundPosition: '-35px -112px',
        backgroundRepeat: 'no-repeat',
        isolation: 'isolate',
      }}>
        <Typography sx={{
          fontFamily: 'Impact',
          fontSize: 50,
          lineHeight: '50px',
          ml: 13,
          color: isDarkMode ? 'white' : 'common.black',
          WebkitTextStroke: isDarkMode ? 'white' : '1px var(--vb-gray-300)',
        }}>THE</Typography>
        <Typography variant='h1' sx={{
          fontFamily: 'Impact',
          fontSize: 293,
          lineHeight: '250px',
          color: isDarkMode ? 'white' : '#2f3131',
          WebkitTextStroke: isDarkMode ? 'white' : '1px var(--vb-black)',
          mixBlendMode: 'soft-light',
        }}>BOOTS</Typography>
      </Stack>
      <Stack alignItems="center" sx={{ mt: 172 }}>
        <Typography variant='headlineLarge' color={isDarkMode ? 'white' : 'common.white'}>
          THE NON -FUNGIBLE EXPERIENCE
        </Typography>
        <Box sx={{
          mt: 41,
          position: 'relative',
        }}>
          <MessiSignatureIcon color={isDarkMode ? 'white' : 'var(--vb-white)'} />
          <Typography variant='bodyLarge' sx={{
            fontWeight: 700,
            color: isDarkMode ? 'white' : 'common.white',
            position: 'absolute',
            left: 35,
            bottom: 3,
            whiteSpace: 'nowrap'
          }}>By Lionel Messi</Typography>
        </Box>
        <Stack direction="row" spacing={20} sx={{ mt: 67 }}>
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
  </>)
}