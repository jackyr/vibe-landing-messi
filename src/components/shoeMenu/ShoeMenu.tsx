import { memo, useState } from 'react'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import useMedia, { useMatch } from '@/common/useMedia'
import Button from '@mui/material/Button'
import ShoePic from './ShoePic'
import EyeIcon from '/public/icon-eye.svg'
import ArrowToprightIcon from '/public/icon-arrow-topright.svg'
import NextImage from 'next/image'
import useThemeMode from '@/common/useThemeMode'

export default memo(function ShoeMenu() {
  const [selectedItem, setSelectedItem] = useState<'basic' | 'vip' | 'premium'>('basic')
  const [showExpanded, setShowExpanded] = useState(false)
  const { isMobile, mobileQuery } = useMedia()
  const { isDarkMode } = useThemeMode()
  const matchXL = useMatch('xl')
  const matchLG = useMatch('lg')
  const matchMD = useMatch('md')

  const shoeItems = [
    { id: 'basic', price: '0.1 ETH ($150)', num: 5000, picSrc: '/boots-thumb-blue.png' },
    { id: 'vip', price: '0.3 ETH ($450)', num: 2000, picSrc: '/boots-thumb-red.png' },
    { id: 'premium', price: '0.5 ETH ($750)', num: 2000, picSrc: '/boots-thumb-green.png' },
  ] as const

  return (
    <Stack component='section' alignItems='center' sx={{
      pt: { lg: 80, md: 60, xs: 40 },
      pb: showExpanded ? { lg: 80, md: 60, xs: 40 } : undefined,
      bgcolor: '#004E8E',
    }}>
      <Box sx={{ 
        width: '100%',
        maxWidth: 1280,
      }}>
        {!showExpanded ? <Stack alignItems='center'>
          <Stack direction='row' justifyContent='space-between' sx={{
            width: '100%',
            px: { lg: 80, md: 60, xs: 24 },
            [mobileQuery]: {
              flexDirection: 'column',
              gap: 30,
            }
          }}>
            <Stack spacing={{ md: 6, xs: 2 }}>
              <Typography
                variant={matchXL ? 'displayLarge' : matchLG ? 'displayMedium' : matchMD ? 'displaySmall' : 'headlineLarge'}
                color={isDarkMode ? 'common.white': 'common.black'}
              >MESSI THE BOOTS COLLECTION</Typography>
              <Typography
                variant={matchXL ? 'headlineLarge' : matchLG ? 'headlineMedium' : 'headlineSmall'}
                color={isDarkMode ? 'common.white': 'common.black'}
              >
                3 TIERS
              </Typography>
            </Stack>
            <Stack direction='row' spacing={{ md: 24, xs: 16 }}>
              <Button sx={{
                'min-width': 'auto',
                width: { xs: 36, md: 44 },
                height: { xs: 36, md: 44 },
                bgcolor: 'rgba(255, 255, 255, 0.16)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                p: 0,
              }}>
                <EyeIcon
                  width={isMobile ? 20 : 24}
                  height={isMobile ? 20 : 24}
                  color={isDarkMode ? 'var(--vb-white)' : 'var(--vb-black)'}
                />
              </Button>
              <Button sx={{
                'min-width': 'auto',
                width: { xs: 36, md: 44 },
                height: { xs: 36, md: 44 },
                bgcolor: 'rgba(255, 255, 255, 0.16)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                p: 0,
              }}>
                <ArrowToprightIcon
                  width={isMobile ? 20 : 24}
                  height={isMobile ? 20 : 24}
                  color={isDarkMode ? 'var(--vb-white)' : 'var(--vb-black)'}
                />
              </Button>
            </Stack>
          </Stack>
          <ShoePic sx={{
            width: { lg: 1280, md: 1082, xs: 520 },
            height: { lg: 628, md: 570, xs: 256 },
          }} />
          <Stack direction='row' spacing={60} sx={{ mb: -91 }}>
            {shoeItems.map(v => (
              <Box key={v.id} sx={{
                width: 230,
                height: 264,
                border: 1,
                borderColor: v.id === selectedItem ? 'common.white' : 'common.gray-600',
                borderRadius: '9px',
                fontSize: 0,
                overflow: 'hidden',
                position: 'relative',
                cursor: 'pointer',
              }} onClick={() => setSelectedItem(v.id)}>
                <Box sx={{
                  position: 'absolute',
                  top: 16,
                  left: 16,
                  bgcolor: 'rgba(8, 8, 8, 0.4)',
                  backdropFilter: 'blur(7.38621px)',
                  borderRadius: '4px',
                  p: '4px 6px',
                }}>
                  <Typography variant='labelSmall' color={isDarkMode ? 'common.white': 'common.black'}>{v.num}</Typography>
                </Box>
                <NextImage
                  src={v.picSrc}
                  alt={v.id}
                  width='230'
                  height='172'
                />
                <Stack spacing={4} sx={{ p: 16 }}>
                  <Typography
                    variant='headlineLarge'
                    color='common.white'
                  >{v.id.toUpperCase()}</Typography>
                  <Typography
                    variant='bodyLarge'
                    color='common.white'
                  >{v.price}</Typography>
                </Stack>
              </Box>
            ))}
          </Stack>
        </Stack> : 123}
      </Box>
    </Stack>
  )
})