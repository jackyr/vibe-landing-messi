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
import useMobileQuery from '@/common/useMobileQuery'

interface PropsType {
  tabValue: 'boots' | 'board';
  walletInfo: {
    avatar: string,
    address: string,
  } | null,
  handleTabChange: (value: 'boots' | 'board') => void
}

const rightBtnStyle = {
  background: 'var(--vb-surface-3)',
  gap: 6,
  padding: 7,
  minWidth: 'auto',
  height: 30,
}

export default function Header({
  tabValue,
  walletInfo,
  handleTabChange,
}: PropsType) {
  const { isDarkMode, toggleThemeMode } = useThemeMode()
  const { isMobile, mobileQuery } = useMobileQuery()

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
  
  return <header style={{ borderBottom: '1px solid var(--vb-gray-800)' }}>
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      px: 32,
      height: 60,
      bgcolor: 'common.black',
      [mobileQuery]: {
        pl: 8,
        pr: 16,
      }
    }}>
      <NextLink href="/" className='imgContainer'>
        <NextImage
          alt="boots"
          src={isDarkMode ? '/logo-dark.svg' : '/logo-light.svg'}
          width="68"
          height="32"
        />
      </NextLink>
      <Stack direction="row" spacing={48}>
        {!isMobile && navBar}
        <Stack direction="row" spacing={24} sx={{ alignItems: 'center' }}>
          <Button
            sx={rightBtnStyle}
            onClick={toggleThemeMode}
          >
            <NextImage
              src={isDarkMode ? '/mode-light.svg' : 'mode-dark.svg'}
              alt="dark mode"
              width="16"
              height="16"
            />
          </Button>
          {walletInfo ? <Button sx={rightBtnStyle}>
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
            <NextImage
              src={isDarkMode ? '/arrow-down-dark.svg' : '/arrow-down-light.svg'}
              alt="arrow down"
              width="16"
              height="16"
            />
          </Button> : <ConnectWalletBtn rightBtnStyle={rightBtnStyle} />}
        </Stack>
      </Stack>
    </Box>
    {isMobile && navBar}
  </header>
}