import { useState } from 'react'
import Decimal from 'decimal.js'
import useThemeMode from '@/common/useThemeMode'
import useMedia, { useMatch } from '@/common/useMedia'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import TabPanel from '@/common/TabPanel'
import Attributes from './tabPanels/Attributes'
import Upgrades from './tabPanels/Upgrades'
import Plugins from './tabPanels/Plugins'
import Holders from './tabPanels/Holders'
import Details from './tabPanels/Details'
import NextImage from 'next/image'
import Button from '@mui/material/Button'
import FullscreenIcon from '/public/icon-fullscreen.svg'
import TimerIcon from '/public/icon-timer.svg'
import useCountdown from '@/common/useCountdown'
import EthIcon from '/public/icon-eth.svg'
import IconMinus from '/public/icon-minus.svg'
import IconPlus from '/public/icon-plus.svg'


interface PropsType {
  itemData: {
    id: string;
    price: string;
    num: number;
    picSrc: string;
    title: string;
    status: 'upcoming' | 'live' | 'soldOut';
  };
  handleFullPage: (id: string) => void;
}

export default function NFTContent({
  itemData,
  handleFullPage,
}: PropsType) {
  const { isMobile } = useMedia()
  const matchLG = useMatch('lg')
  const [currentTab, setCurrentTab] = useState('attributes')
  const { isDarkMode } = useThemeMode()
  const { countdownListItems } = useCountdown(1681844374775)
  const [cartCount, setCartCount] = useState(1)

  const tabItems = [
    { id: 'attributes', label: 'ATTRIBUTES', panel: Attributes },
    { id: 'updates', label: 'UPDATES', panel: Upgrades },
    { id: 'plugins', label: 'PLUGINS', panel: Plugins },
    { id: 'holders', label: 'HOLDERS', panel: Holders },
    { id: 'details', label: 'DETAILS', panel: Details },
  ]

  function handleMint() {
    console.log(cartCount)
  }

  const mintArea = (
    <Stack spacing={24}>
      <Stack spacing={12} sx={{ mt: { md: 0, xs: -24 } }}>
        <Stack direction='row' justifyContent='space-between'>
          <Typography variant='bodyMedium' sx={{
            color: 'common.gray-400',
          }}>Price</Typography>
          <Stack direction='row' alignItems='center' spacing={4}>
            <EthIcon
              width={8}
              height={12}
              color="var(--vb-gray-600)"
            />
            <Typography variant='bodyMedium' sx={{
              color: 'common.white',
            }}>0.1</Typography>
          </Stack>
        </Stack>
        <Stack direction='row' justifyContent='space-between'>
          <Typography variant='bodyMedium' sx={{
            color: 'common.gray-400',
          }}>Highest bid</Typography>
          <Stack direction='row' alignItems='center' spacing={4}>
            <EthIcon
              width={8}
              height={12}
              color="var(--vb-gray-600)"
            />
            <Typography variant='bodyMedium' sx={{
              color: 'common.white',
            }}>0.2</Typography>
          </Stack>
        </Stack>
        <Stack direction='row' justifyContent='space-between'>
          <Typography variant='bodyMedium' sx={{
            color: 'common.gray-400',
          }}>Last Sale</Typography>
          <Stack direction='row' alignItems='center' spacing={4}>
            <EthIcon
              width={8}
              height={12}
              color="var(--vb-gray-600)"
            />
            <Typography variant='bodyMedium' sx={{
              color: 'common.white',
            }}>0.3</Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack spacing={12}>
        {itemData.status !== 'soldOut' && <Stack direction='row' justifyContent='space-between'>
          <Stack direction='row' spacing={12} justifyContent='space-between' alignItems='center' sx={{
            px: 10,
            width: 103,
            height: 36,
            bgcolor: 'common.on-surface-5',
            border: 1,
            borderColor: 'common.gray-700',
            borderRadius: '4px',
          }}>
            <Box
              sx={{ fontSize: 0, cursor: 'pointer', userSelect: 'none' }}
              onClick={() => setCartCount(count => count === 1 ? 1 : count - 1)}
            >
              <IconMinus
                width={16}
                height={16}
                color='var(--vb-white)'
              />
            </Box>
            <Typography variant='bodyMedium' sx={{
              color: 'common.white',
              fontWeight: 700,
            }}>{cartCount}</Typography>
            <Box
              sx={{ fontSize: 0, cursor: 'pointer', userSelect: 'none' }}
              onClick={() => setCartCount(count => count + 1)}
            >
              <IconPlus
                width={16}
                height={16}
                color='var(--vb-white)'
              />
            </Box>
          </Stack>
          <Stack direction='row' alignItems='center' spacing={4}>
            <EthIcon
              width={8}
              height={12}
              color="var(--vb-gray-600)"
            />
            <Typography variant='bodyLarge' sx={{
              color: 'common.white',
              fontWeight: 700,
            }}>{new Decimal(0.1).times(cartCount).toString()}</Typography>
          </Stack>
        </Stack>}
        <Button
          variant='contained'
          disabled={itemData.status === 'upcoming' || itemData.status === 'soldOut'}
          onClick={handleMint}
        >MINT</Button>
      </Stack>
    </Stack>
  )
  
  return (
    <Stack spacing={48} sx={{
      height: '100%',
      background: 'var(--vb-black)',
      border: 1,
      borderColor: 'common.gray-800',
      borderRadius: { lg: 0, xs: '12px 12px 0 0' },
      boxShadow: { lg: 0, xs: '0px -26px 84px #000000' },
      p: 24,
      overflow: 'hidden',
      '&:before': !matchLG ? {
        content: '""',
        m: '-4px auto 40px auto',
        width: 66,
        border: 2,
        borderColor: 'common.gray-700',
        borderRadius: '4px',
      } : null
    }}>
      <Stack direction='row' spacing={24}>
        <Box sx={{
          width: { lg: 280, md: 316, xs: 100 },
          height: { lg: 316, md: 316, xs: 100 },
          fontSize: 0,
          position: 'relative',
        }}>
          <NextImage
            src={itemData.picSrc}
            alt={itemData.id}
            fill
            style={{ objectFit: 'cover' }}
          />
        </Box>
        <Stack spacing={24} sx={{ flex: 1 }}>
          <Stack>
            <Stack direction='row' justifyContent='space-between'>
              <Typography variant='titleLarge' sx={{
                color: 'common.white',
              }}>{itemData.title}</Typography>
              <Button sx={{
                minWidth: 'auto',
                width: 28,
                height: 28,
                bgcolor: 'common.on-surface-3',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                p: 0,
              }} onClick={() => handleFullPage(itemData.id)}>
                <FullscreenIcon
                  width={16}
                  height={16}
                  color='var(--vb-white)'
                />
              </Button>
            </Stack>
            <Typography variant='bodyMedium' sx={{
              color: 'common.gray-400',
            }}>Owned: 0x34f67.....56</Typography>
          </Stack>
          {(itemData.status === 'upcoming' || itemData.status === 'live') && 
          <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{
            p: '4px 6px',
            bgcolor: itemData.status === 'upcoming' ? '#1E190B' : '#0A1F10',
            borderRadius: '4px',
          }}>
            <Stack direction='row' spacing={4} alignItems='center'>
              <TimerIcon
                width={12}
                height={12}
                color={itemData.status === 'upcoming' ? 'var(--vb-yellow-100)' : 'var(--vb-primary-500)'}
              />
              <Typography variant='labelMedium' sx={{
                color: itemData.status === 'upcoming' ? 'var(--vb-yellow-100)' : 'var(--vb-primary-500)',
              }}>{itemData.status === 'upcoming' ? 'UPCOMING' : 'LIVE'}:</Typography>
            </Stack>
            {countdownListItems.length && <Typography variant='labelLarge' sx={{
              justifySelf: 'flex-end',
              color: isDarkMode ? 'common.white' : 'common.black',
            }}>
              {countdownListItems[0].value}d: {countdownListItems[1].value}h: {countdownListItems[2].value}m: {countdownListItems[3].value}s
            </Typography>}
          </Stack>}
          {!isMobile && mintArea}
        </Stack>
      </Stack>
      {isMobile && mintArea}
      <Stack spacing={24} sx={{
        flex: 1,
        overflow: 'hidden',
      }}>
        <Box sx={{
          borderBottom: 1,
          borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'common.gray-800',
        }}>
          <Tabs
            sx={{ minHeight: 0 }}
            variant="scrollable"
            scrollButtons={false}
            value={currentTab}
            onChange={(e, value) => setCurrentTab(value)}
          >
            {tabItems.map(v => (
              <Tab
                sx={{
                  p: 8,
                  minHeight: 0,
                }}
                key={v.id}
                label={v.label}
                value={v.id}
              />
            ))}
          </Tabs>
        </Box>
        <Box sx={{
          overflowY: 'auto',
        }}>
          {tabItems.map(v => {
            const PanelComponent = v.panel
            return (
              <TabPanel
                key={v.id}
                value={v.id}
                currentValue={currentTab}
              >
                <PanelComponent />
              </TabPanel>
            )
          })}
        </Box>
      </Stack>
    </Stack>
  )
}