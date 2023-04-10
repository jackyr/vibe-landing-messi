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
import NFTContent from './NFTContent'
import CloseIcon from '/public/icon-close-btn.svg'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'

interface PropsType {
  handleFullPage: (id: string) => void;
}

export default memo(function ShoeMenu({ handleFullPage }: PropsType) {
  const [selectedItem, setSelectedItem] = useState<'basic' | 'vip' | 'premium'>('basic')
  const [showExpanded, setShowExpanded] = useState(false)
  const { mobileQuery } = useMedia()
  const { isDarkMode } = useThemeMode()
  const matchXL = useMatch('xl')
  const matchLG = useMatch('lg')
  const matchMD = useMatch('md')

  const shoeItems = [
    { id: 'basic', price: '0.1 ETH ($150)', num: 5000, picSrc: '/boots-thumb-blue.png', title: 'Basic Tier', status: 'upcoming' },
    { id: 'vip', price: '0.3 ETH ($450)', num: 2000, picSrc: '/boots-thumb-red.png', title: 'Vip Tier', status: 'live' },
    { id: 'premium', price: '0.5 ETH ($750)', num: 2000, picSrc: '/boots-thumb-green.png', title: 'Premium Tier', status: 'soldOut' },
  ] as const

  return (
    <Stack component='section' alignItems='center' sx={{
      pt: { lg: 80, md: 60, xs: 40 },
      pb: showExpanded && matchLG ? { lg: 80, md: 60, xs: 40 } : undefined,
      bgcolor: '#004E8E',
    }}>
      <Stack direction='row' justifyContent='space-between' spacing={{ xl: 100, lg: 46 }} sx={{ 
        width: showExpanded && matchLG ? { xl: 1368, lg: 1120 } : { lg: 1280, md: 834, xs: 390 },
      }}>
        <Stack alignItems='center' spacing={showExpanded && matchLG ? 62 : 0} sx={{
          flex: 1,
          overflow: 'hidden',
        }}>
          <Stack direction='row' justifyContent='space-between' sx={{
            width: '100%',
            px: showExpanded && matchLG ? 0 : { lg: 80, md: 60, xs: 22 },
            [mobileQuery]: {
              flexDirection: 'column',
              gap: 30,
            }
          }}>
            <Stack spacing={{ md: 6, xs: 2 }} sx={{
              flex: 1,
              overflow: 'hidden',
            }}>
              <Typography
                variant={matchXL ? 'displayLarge' : matchLG ? 'displayMedium' : matchMD ? 'displaySmall' : 'headlineLarge'}
                color={isDarkMode ? 'common.white': 'common.black'}
                sx={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', }}
                title='MESSI THE BOOTS COLLECTION'
              >MESSI THE BOOTS COLLECTION</Typography>
              <Typography
                variant={matchXL ? 'headlineLarge' : matchLG ? 'headlineMedium' : 'headlineSmall'}
                color={isDarkMode ? 'common.white': 'common.black'}
              >
                3 TIERS
              </Typography>
            </Stack>
            {!(showExpanded && matchLG) && <Stack direction='row' spacing={{ md: 24, xs: 16 }}>
              <Button sx={{
                minWidth: 'auto',
                width: { xs: 36, md: 44 },
                height: { xs: 36, md: 44 },
                bgcolor: 'rgba(255, 255, 255, 0.16)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                p: 0,
              }} onClick={() => setShowExpanded(true)}>
                <EyeIcon
                  width={matchMD ? 24 : 20}
                  height={matchMD ? 24 : 20}
                  color={isDarkMode ? 'var(--vb-white)' : 'var(--vb-black)'}
                />
              </Button>
              <Button sx={{
                minWidth: 'auto',
                width: { xs: 36, md: 44 },
                height: { xs: 36, md: 44 },
                bgcolor: 'rgba(255, 255, 255, 0.16)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                p: 0,
              }} onClick={() => handleFullPage(selectedItem)}>
                <ArrowToprightIcon
                  width={matchMD ? 24 : 20}
                  height={matchMD ? 24 : 20}
                  color={isDarkMode ? 'var(--vb-white)' : 'var(--vb-black)'}
                />
              </Button>
            </Stack>}
          </Stack>
          <ShoePic sx={{
            width: showExpanded && matchLG ? { xl: 758, lg: 664 } : { lg: 1280, md: 1082, xs: 520 },
            height: showExpanded && matchLG ? { xl: 372, lg: 326 } : { lg: 628, md: 570, xs: 256 },
          }} />
          {showExpanded && matchLG && <Stack direction='row' spacing={35}>
            {shoeItems.map(v => (
              <Stack key={v.id} sx={{
                width: 100,
                height: 100,
                border: 1,
                borderColor: v.id === selectedItem ? 'common.white' : 'common.gray-600',
                borderRadius: '9px',
                fontSize: 0,
                overflow: 'hidden',
                position: 'relative',
                cursor: 'pointer',
              }} onClick={() => setSelectedItem(v.id)}>
                <NextImage
                  src={v.picSrc}
                  alt={v.id}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Stack>
            ))}
          </Stack>}
        </Stack>
        {showExpanded && matchLG && <Box sx={{
          width: 575,
          height: 739,
          flex: 'none',
          position: 'relative',
        }}>
          <NFTContent
            itemData={shoeItems.find(v => v.id === selectedItem) as typeof shoeItems[number]}
            handleFullPage={handleFullPage}
          />
          <Box sx={{
            width: 24,
            height: 24,
            bgcolor: 'common.gray-900',
            border: 1,
            borderColor: 'common.gray-700',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            position: 'absolute',
            left: -10,
            top: 'calc(50% - 5px)',
          }} onClick={() => setShowExpanded(false)}>
            <CloseIcon
              width={20}
              height={20}
              color={isDarkMode ? 'var(--vb-white)' : 'var(--vb-black)'}
            />
          </Box>
        </Box>}
        {showExpanded && !matchLG && <SwipeableDrawer
          anchor='bottom'
          open={showExpanded}
          onClose={() => setShowExpanded(false)}
          onOpen={() => setShowExpanded(true)}
          sx={{
            ['& .MuiBackdrop-root']: {
              bgcolor: 'transparent',
            },
            ['& .MuiPaper-root']: {
              overflow: 'visible',
              height: '80%',
            }
          }}
        >
          <NFTContent
            itemData={shoeItems.find(v => v.id === selectedItem) as typeof shoeItems[number]}
            handleFullPage={handleFullPage}
          />
        </SwipeableDrawer>}
      </Stack>
      {!(showExpanded && matchLG) && <Stack direction='row' spacing={{ lg: 60, md: 40, xs: 24 }} sx={{
        mb: { lg: -93, md: -89, xs: -85 },
        [mobileQuery]: {
          maxWidth: 390,
          width: '100%',
          overflowX: 'auto',
          px: 22,
          WebkitOverflowScrolling: 'touch',
          ['::-webkit-scrollbar']: {
            display: 'none',
          },
        }
      }}>
        {shoeItems.map(v => (
          <Stack key={v.id} sx={{
            width: { lg: 230, md: 212, xs: 200 },
            height: { lg: 264, md: 260, xs: 224 },
            border: 1,
            borderColor: v.id === selectedItem ? 'common.white' : 'common.gray-600',
            borderRadius: '9px',
            fontSize: 0,
            overflow: 'hidden',
            position: 'relative',
            cursor: 'pointer',
            flex: 'none',
          }} onClick={() => setSelectedItem(v.id)}>
            <Box sx={{
              position: 'absolute',
              top: 16,
              left: 16,
              zIndex: 1,
              bgcolor: 'rgba(8, 8, 8, 0.4)',
              backdropFilter: 'blur(7.38621px)',
              borderRadius: '4px',
              p: '4px 6px',
            }}>
              <Typography
                variant='labelSmall'
                color={isDarkMode ? 'common.white': 'common.black'}>
                  {v.num}
              </Typography>
            </Box>
            <Box sx={{
              flex: 1,
              position: 'relative',
              overflow: 'hidden',
            }}>
              <NextImage
                src={v.picSrc}
                alt={v.id}
                fill
              />
            </Box>
            <Stack spacing={4} sx={{ p: 16 }}>
              <Typography
                variant={ matchLG ? 'headlineLarge' : 'headlineMedium' }
                color='common.white'
              >{v.id.toUpperCase()}</Typography>
              <Typography
                variant={ matchLG ? 'bodyLarge' : matchMD ? 'titleMedium' : 'titleSmall' }
                color='common.white'
              >{v.price}</Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>}
    </Stack>
  )
})