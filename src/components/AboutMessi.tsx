import { memo } from 'react'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import CupIcon from '/public/icon-cup.svg'
import FootballIcon from '/public/icon-football.svg'
import BootsIcon from '/public/icon-boots.svg'

export default memo(function AboutMessi() {
  return (
    <Stack component='section' direction="row" justifyContent="space-between" sx={{
      mt: 60,
      py: { md: 140 },
      px: { xs: 20, md: 75, lg: 80, xl: 276 },
      backgroundImage: 'url(/messi-portrait.png)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '379px 648px',
      backgroundPosition: 'calc(50% + 30px) 148px',
    }}>
      <Stack spacing={50} sx={{
        width: 360,
        height: 763,
        pt: 140,
      }}>
        <Typography variant='displayMedium' color="common.white">
          ABOUT MESSI
        </Typography>
        <Typography sx={{ 
          fontSize: 24,
          lineHeight: '40px',
          color: 'common.gray-200',
         }}>
          Lionel Messi is the greatest footballer of his generation. He has won 32 trophies throughout his career, including seven league titles, five UEFA Champions Leagues, and the UEFA European Championship. With <br/>over 800 official <br/>senior goals to <br/>his name.
        </Typography>
      </Stack>
      <Stack alignItems="flex-end" spacing={70} sx={{
        width: 360,
        height: 763,
        pt: 140,
        textAlign: 'right',
      }}>
        <Stack spacing={23} alignItems='flex-end'>
          <CupIcon color="var(--vb-gray-400)" />
          <Stack>
            <Typography variant='displaySmall' color="common.white">345</Typography>
            <Typography variant='headlineLarge' color="common.gray-400">TROPHIES</Typography>
          </Stack>
        </Stack>
        <Stack spacing={23} alignItems='flex-end'>
          <FootballIcon color="var(--vb-gray-400)" />
          <Stack>
            <Typography variant='displaySmall' color="common.white">10</Typography>
            <Typography variant='headlineLarge' color="common.gray-400">GOLDEN BALL</Typography>
          </Stack>
        </Stack>
        <Stack spacing={23} alignItems='flex-end'>
          <BootsIcon color="var(--vb-gray-400)" />
          <Stack>
            <Typography variant='displaySmall' color="common.white">8</Typography>
            <Typography variant='headlineLarge' color="common.gray-400">GOLDEN BOOTS</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
})