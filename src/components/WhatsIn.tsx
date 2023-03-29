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

export default memo(function WhatsIn() {
  const matchLG = useMatch('lg')
  const matchMD = useMatch('md')
  const { mobileQuery } = useMedia()

  return (
    <Stack
      component='section'
      alignItems='center'
      spacing={{ lg: 120 - 90, md: 100 - 90, xs: 60 - 50 }}
      sx={{
        py: { lg: 140, md: 80, xs: 60 },
        px: { lg: 80, xs: 16 },
      }}
    >
      <Stack spacing={{ xs: 24, md: 40, lg: 36, xl: 48 }} alignItems='center'>
        <Typography
          variant={matchLG ? 'displayLarge' : matchMD ? 'displaySmall' : 'headlineLarge'}
          sx={{ color: 'common.white' }}
        >
          WHAT IS IN FOR YOU?
        </Typography>
        <Box sx={{
          width: { xs: 76, md: 118, lg: 112 },
          border: 4,
          borderColor: '#4B8EF2',
          boxShadow: '0px 6px 21px #4B8EF2',
        }}></Box>
      </Stack>
      <Grid container rowSpacing={matchMD ? 90 : 50} sx={{ textAlign: 'center' }}>
        <Grid lg={4} xs={6} item>
          <Stack spacing={{ xs: 16, md: 44 }} alignItems='center'>
            <ShoesIcon color="var(--vb-gray-400)" width={matchMD ? 90 : 48} height={matchMD ? 90 : 48} />
            <Typography variant='headlineLarge' sx={{
              color: 'common.gray-200',
              [mobileQuery]: {
                fontSize: 16,
                fontWeight: 500,
                lineHeight: '24px',
              }
            }}>
              OWNERSHIP OF <br/>PHYSICAL AND DIGITAL <br/>ITEM
            </Typography>
          </Stack>
        </Grid>
        <Grid lg={4} xs={6} item>
          <Stack spacing={{ xs: 16, md: 44 }} alignItems='center'>
            <StarIcon color="var(--vb-gray-400)" width={matchMD ? 90 : 48} height={matchMD ? 90 : 48} />
            <Typography variant='headlineLarge' sx={{
              color: 'common.gray-200',
              [mobileQuery]: {
                fontSize: 16,
                fontWeight: 500,
                lineHeight: '24px',
              }
            }}>
              REAL UTILITY <br/>ADVANTAGES FOR <br/>HOLDERS
            </Typography>
          </Stack>
        </Grid>
        <Grid lg={4} xs={6} item>
          <Stack spacing={{ xs: 16, md: 44 }} alignItems='center'>
            <ImageIcon color="var(--vb-gray-400)" width={matchMD ? 90 : 48} height={matchMD ? 90 : 48} />
            <Typography variant='headlineLarge' sx={{
              color: 'common.gray-200',
              [mobileQuery]: {
                fontSize: 16,
                fontWeight: 500,
                lineHeight: '24px',
              }
            }}>
              SEAMLESS <br/>EXPERIENCE WITH <br/>COLLECTIBLES
            </Typography>
          </Stack>
        </Grid>
        <Grid lg={4} xs={6} item>
          <Stack spacing={{ xs: 16, md: 44 }} alignItems='center'>
            <TicketIcon color="var(--vb-gray-400)" width={matchMD ? 90 : 48} height={matchMD ? 90 : 48} />
            <Typography variant='headlineLarge' sx={{
              color: 'common.gray-200',
              [mobileQuery]: {
                fontSize: 16,
                fontWeight: 500,
                lineHeight: '24px',
              }
            }}>
              GET VIP ACCESS <br/>OF EVENTS <br/>TICKETS
            </Typography>
          </Stack>
        </Grid>
        <Grid lg={4} xs={6} item>
          <Stack spacing={{ xs: 16, md: 44 }} alignItems='center'>
            <ClothesIcon color="var(--vb-gray-400)" width={matchMD ? 90 : 48} height={matchMD ? 90 : 48} />
            <Typography variant='headlineLarge' sx={{
              color: 'common.gray-200',
              [mobileQuery]: {
                fontSize: 16,
                fontWeight: 500,
                lineHeight: '24px',
              }
            }}>
              BENEFITS OF <br/>EXCLUSIVE SIGNED <br/>JERSEYS
            </Typography>
          </Stack>
        </Grid>
        <Grid lg={4} xs={6} item>
          <Stack spacing={{ xs: 16, md: 44 }} alignItems='center'>
            <SecurityIcon color="var(--vb-gray-400)" width={matchMD ? 90 : 48} height={matchMD ? 90 : 48} />
            <Typography variant='headlineLarge' sx={{
              color: 'common.gray-200',
              [mobileQuery]: {
                fontSize: 16,
                fontWeight: 500,
                lineHeight: '24px',
              }
            }}>
              CUTTING-EDGE <br/>SECURITY TO PROTECT <br/>USERS ASSETS
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  ) 
})