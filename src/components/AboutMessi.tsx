import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import CupIcon from '/public/icon-cup.svg'
import FootballIcon from '/public/icon-football.svg'
import ShoesIcon from '/public/icon-shoes.svg'

export default function AboutMessi() {
  return (
    <Stack component='section' direction="row" justifyContent="center" spacing={646} sx={{
      mt: 60,
      py: 140,
      backgroundImage: 'url(/messi-portrait.png)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '379px 648px',
      backgroundPosition: 'center 148px',
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
          <CupIcon color="common.gray-400" />
          <Stack>
            <Typography variant='displaySmall' color="common.white">345</Typography>
            <Typography variant='headlineLarge' color="common.gray-400">TROPHIES</Typography>
          </Stack>
        </Stack>
        <Stack spacing={23} alignItems='flex-end'>
          <FootballIcon color="common.gray-400" />
          <Stack>
            <Typography variant='displaySmall' color="common.white">10</Typography>
            <Typography variant='headlineLarge' color="common.gray-400">GOLDEN BALL</Typography>
          </Stack>
        </Stack>
        <Stack spacing={23} alignItems='flex-end'>
          <ShoesIcon color="common.gray-400" />
          <Stack>
            <Typography variant='displaySmall' color="common.white">8</Typography>
            <Typography variant='headlineLarge' color="common.gray-400">GOLDEN BOOTS</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}