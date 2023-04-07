import { memo } from 'react'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import ShoesIcon from '/public/icon-shoes.svg'
import StarIcon from '/public/icon-star.svg'
import ImageIcon from '/public/icon-image.svg'
import TicketIcon from '/public/icon-ticket.svg'
import ClothesIcon from '/public/icon-clothes.svg'
import SecurityIcon from '/public/icon-security.svg'
import useMedia, { useMatch } from '@/common/useMedia'

const listItems = [
  { icon: ShoesIcon, text: <>OWNERSHIP OF <br/>PHYSICAL AND DIGITAL <br/>ITEM</> },
  { icon: StarIcon, text: <>REAL UTILITY <br/>ADVANTAGES FOR <br/>HOLDERS</> },
  { icon: ImageIcon, text: <>SEAMLESS <br/>EXPERIENCE WITH <br/>COLLECTIBLES</> },
  { icon: TicketIcon, text: <>GET VIP ACCESS <br/>OF EVENTS <br/>TICKETS</> },
  { icon: ClothesIcon, text: <>BENEFITS OF <br/>EXCLUSIVE SIGNED <br/>JERSEYS</> },
  { icon: SecurityIcon, text: <>CUTTING-EDGE <br/>SECURITY TO PROTECT <br/>USERS ASSETS</> },
]

export default memo(function WhatsIn() {
  const matchLG = useMatch('lg')
  const matchMD = useMatch('md')
  const { mobileQuery } = useMedia()

  return (
    <Stack
      component='section'
      alignItems='center'
      sx={{
        py: { lg: 140, md: 80, xs: 60 },
        // px: { lg: 80, xs: 16 },
      }}
    >
      <Stack spacing={{ lg: 120 - 90, md: 100 - 90, xs: 60 - 50 }} sx={{
        width: { xl: 1636, lg: 1120, md: 834, xs: 390 }
      }}>
        <Stack spacing={{ xl: 48, lg: 36, md: 40, xs: 24 }} alignItems='center'>
          <Typography
            variant={matchLG ? 'displayLarge' : matchMD ? 'displaySmall' : 'headlineLarge'}
            sx={{ color: 'common.white' }}
          >
            WHAT IS IN FOR YOU?
          </Typography>
          <Box sx={{
            width: { lg: 112, md: 118, xs: 76 },
            border: 4,
            borderColor: '#4B8EF2',
            boxShadow: '0px 6px 21px #4B8EF2',
          }}></Box>
        </Stack>
        <Grid container rowSpacing={{ md: 90, xs: 50 }} sx={{ textAlign: 'center' }}>
          {listItems.map((v, i) => {
            const IconComponent = v.icon
            return (
              <Grid key={i} lg={4} xs={6} item>
                <Stack spacing={{ xs: 16, md: 44 }} alignItems='center'>
                  <IconComponent color="var(--vb-gray-400)" width={matchMD ? 90 : 48} height={matchMD ? 90 : 48} />
                  <Typography variant='headlineLarge' sx={{
                    color: 'common.gray-200',
                    [mobileQuery]: {
                      fontSize: 16,
                      fontWeight: 500,
                      lineHeight: '24px',
                    }
                  }}>{v.text}</Typography>
                </Stack>
              </Grid>
            )
          })}
        </Grid>
      </Stack>
    </Stack>
  ) 
})