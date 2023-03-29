import { Fragment, useCallback, useState } from 'react'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import Dialog from '@mui/material/Dialog'
import NextImage from 'next/image'
import useThemeMode from '@/common/useThemeMode'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import useMedia from '@/common/useMedia'
import Stack from '@mui/material/Stack'
import ConnectionIcon from '/public/icon-connection.svg'
import CloseBtnIcon from '/public/icon-close-btn.svg'

interface PropsType {
  rightBtnStyle: object;
}

export default function ConnectWalletBtn({
  rightBtnStyle,
}: PropsType) {
  const { isDarkMode } = useThemeMode()
  const [open, setOpen] = useState(false)
  const { isMobile, mobileQuery } = useMedia()

  const listItems = [
    { id: 'metamask', icon: '/metamask-logo.png', label: 'MetaMask' },
    { id: 'coinbase', icon: '/coinbase-logo.png', label: 'Coinbase Wallet' },
    { id: 'wallet', icon: '/wallet-logo.png', label: 'WalletConnect' },
  ]

  const handleClick = useCallback((id: string) => {
    console.log(id)
    setOpen(false)
  }, [])

  return (<>
    <Button
      sx={Object.assign({}, rightBtnStyle, {
        border: 1,
        borderColor: 'common.white',
        p: '6px 12px',
      })}
      onClick={() => setOpen(true)}
    >
      <Typography
        variant='labelMedium'
        sx={{ lineHeight: '16px' }}
        color="common.white"
      >
        CONNECT WALLET
      </Typography>
    </Button>
    <Dialog
      sx={{
        ['& .MuiDialog-paper']: {
          width: 600,
          maxWidth: 600,
          [mobileQuery]: {
            margin: 16,
          }
        }
      }}
      open={open}
      onClose={() => setOpen(false)}
    >
      <DialogTitle
        variant={isMobile ? 'headlineSmall' : 'headlineMedium'}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: '24px 32px',
          [mobileQuery]: {
            p: 20,
          }
        }}
      >
        <Stack direction="row" spacing={10}>
          <ConnectionIcon color="var(--vb-white)" />
          <Typography>CONNECT YOUR WALLET</Typography>
        </Stack>
        {isMobile && <Button
          variant="text"
          sx={{
            p: 0,
            minWidth: 'auto',
            height: 'auto',
          }}
          onClick={() => setOpen(false)}
        >
          <CloseBtnIcon color='var(--vb-gray-400)' />
        </Button>}
      </DialogTitle>
      <DialogContent sx={{
        p: '0 32px 32px 32px',
        [mobileQuery]: {
          p: 20,
        }
      }}>
        <List
          disablePadding
          sx={{
            border: 1,
            borderColor: 'common.gray-800',
          }}
        >
          {listItems.map((v, i) => (<Fragment key={v.id}>
            {!!i && <Divider />}
            <ListItem disablePadding>
              <ListItemButton sx={{ py: 12, gap: 16 }} onClick={() => handleClick(v.id)}>
                <ListItemIcon sx={{ minWidth: 'auto' }}>
                  <NextImage
                    alt={v.label}
                    src={v.icon}
                    width={isMobile ? "28" : "36"}
                    height={isMobile ? "28" : "36"}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={v.label}
                  primaryTypographyProps={{ variant: 'bodyMedium' }}
                />
              </ListItemButton>
            </ListItem>
          </Fragment>))}
        </List>
      </DialogContent>
    </Dialog>
  </>)
}