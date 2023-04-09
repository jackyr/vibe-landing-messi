import { memo } from 'react'
import Button from '@mui/material/Button'
import NextLink from 'next/link'
import NextImage from 'next/image'
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import ConnectWalletBtn from './ConnectWalletBtn'
import useThemeMode from '@/common/useThemeMode'
import Stack from '@mui/material/Stack'
import useMedia from '@/common/useMedia'
import Logo from '/public/logo.svg'
import ModeIcon from '/public/icon-mode.svg'
import ArrowDownIcon from '/public/icon-arrow-down.svg'

interface PropsType {
  tabValue: 'boots' | 'board';
  walletInfo: {
    avatar: string,
    address: string,
  } | null,
  handleTabChange: (value: 'boots' | 'board') => void
  handleConnect: (value: string) => void
}

const rightBtnStyle = {
  background: 'var(--vb-on-surface-3)',
  gap: 6,
  p: 7,
  minWidth: 'auto',
  height: 30,
}

export default memo(function Header({
  tabValue,
  walletInfo,
  handleTabChange,
  handleConnect,
}: PropsType) {
  const { isDarkMode, toggleThemeMode } = useThemeMode()
  const { isMobile, mobileQuery } = useMedia()

  const tabItems = [
    { id: 'boots', label: 'THE BOOTS' },
    { id: 'board', label: 'LEADERBOARD' },
  ]

  const navBar = (<Tabs
    variant={isMobile ? 'fullWidth': 'standard'}
    sx={{
      height: 60,
      [mobileQuery]: {
        height: 42,
        px: 16,
      }
    }}
    value={tabValue}
    onChange={(e, value) => handleTabChange(value)}
  >
    {tabItems.map(v => (
      <Tab
        key={v.id}
        sx={{
          py: 21,
          [mobileQuery]: {
            py: 16,
          },
        }}
        value={v.id}
        label={v.label}
      />
    ))}
  </Tabs>)
  
  return <Box component="header" sx={{
    borderBottom: '1px solid',
    borderColor: 'common.gray-800',
  }}>
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      px: 32,
      height: 59,
      bgcolor: 'common.black',
      [mobileQuery]: {
        pl: 8,
        pr: 16,
      }
    }}>
      <NextLink href="/" className='imgContainer'>
        <Logo color={isDarkMode ? 'white' : 'var(--vb-white)'} />
      </NextLink>
      <Stack direction="row" spacing={48}>
        {!isMobile && navBar}
        <Stack direction="row" alignItems="center" spacing={24}>
          <Button
            sx={rightBtnStyle}
            onClick={toggleThemeMode}
          >
            <ModeIcon color='var(--vb-white)' />
          </Button>
          {walletInfo ? <Button sx={rightBtnStyle} >
            <NextImage
              src={walletInfo.avatar}
              alt="wallet avatar"
              width="18"
              height="18"
            />
            <Typography
              variant='bodySmall'
              color="common.gray-100"
              sx={{ textTransform: 'none' }}
            >
              {walletInfo.address.length > 10
                ? `${walletInfo.address.slice(0, 6)}..${walletInfo.address.slice(-2)}`
                : walletInfo.address}
            </Typography>
            <ArrowDownIcon color='var(--vb-gray-400)' />
          </Button> : <ConnectWalletBtn
            rightBtnStyle={rightBtnStyle}
            handleConnect={handleConnect}
          />}
        </Stack>
      </Stack>
    </Box>
    {isMobile && navBar}
  </Box>
})