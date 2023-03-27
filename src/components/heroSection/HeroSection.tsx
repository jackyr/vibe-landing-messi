import { useMemo, useState, useRef, useEffect } from 'react'
import NextImage from 'next/image'
import Box from '@mui/material/Box'
import useMobileQuery from '@/common/useMobileQuery'
import useThemeMode from '@/common/useThemeMode'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

dayjs.extend(duration)

export default function HeroSection() {
  const { isDarkMode, toggleThemeMode } = useThemeMode()
  const { isMobile, mobileQuery } = useMobileQuery()
  const [startTimeStamp, setStartTimeStamp] = useState(1681044374775)
  const countdownIntervalRef = useRef<number>()
  const [timeListItems, setTimeListItems] = useState<{ label: string, value: number }[]>([])

  useEffect(() => {
    if (startTimeStamp) {
      const calc = () => {
        const diff = dayjs.duration(dayjs(startTimeStamp).diff(dayjs()))
        setTimeListItems([
          { label: 'Days', value: Math.floor(diff.asDays()) },
          { label: 'Hrs', value: diff.hours() },
          { label: 'Mins', value: diff.minutes() },
          { label: 'Secs', value: diff.seconds() },
        ])
      }
      calc()
      window.clearInterval(countdownIntervalRef.current)
      countdownIntervalRef.current = window.setInterval(calc, 1000)
    }
  }, [startTimeStamp])

  return (<>
    <Stack
      sx={{
        height:2000,
        alignItems: 'center',
        pt: 50,
        backgroundImage: isDarkMode ? 'url(/hero-section-bg-dark.png)' : 'url(/hero-section-bg-light.png)',
        backgroundSize: '100% 1995px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center -60px',
      }}
    >
      <Stack sx={{
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
          color: 'common.black',
          WebkitTextStroke: '1px #fff',
          [mobileQuery]: {
            WebkitTextStroke: '1px var(--vb-gray-300)',
          }
        }}>
          THE
        </Typography>
        <Typography variant='h1' sx={{
          fontFamily: 'Impact',
          fontSize: 293,
          lineHeight: '250px',
          color: '#fff',
          mixBlendMode: 'soft-light',
          WebkitTextStroke: '1px #fff',
          [mobileQuery]: {
            WebkitTextStroke: '1px var(--vb-gray-300)',
          }
        }}>BOOTS</Typography>
      </Stack>
      <Stack sx={{
        mt: 172,
        alignItems: 'center',
      }}>
        <Typography
          variant='headlineLarge'
          sx={{
            color: '#fff',
          }}
        >
          THE NON -FUNGIBLE EXPERIENCE
        </Typography>
        <Box sx={{
          mt: 41,
          position: 'relative',
        }}>
          <NextImage
            src='/messi-signature-dark.svg'
            alt='messi signature'
            width='114'
            height='86'
          />
          <Typography
            variant='bodyLarge'
            sx={{
              fontWeight: 700,
              color: '#fff',
              position: 'absolute',
              left: 35,
              bottom: 3,
              whiteSpace: 'nowrap'
            }}
          >
            By Lionel Messi
          </Typography>
        </Box>
        <Stack sx={{
          flexDirection: 'row',
          mt: 67,
          gap: 20,
        }}>
          {timeListItems.map(v => (
            <Stack key={v.label} sx={{
              width: 86,
              height: 86,
              bgcolor: 'common.surface-5',
              backdropFilter: 'blur(30px)',
              borderRadius: '5px',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Typography
                variant='headlineLarge'
                sx={{
                  color: 'common.white'
                }}
              >
                {v.value}
              </Typography>
              <Typography
                variant="bodyLarge"
                sx={{
                  color: 'common.white'
                }}
              >
                {v.label}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  </>)
}