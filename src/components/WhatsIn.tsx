import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import CupIcon from '/public/icon-cup.svg'

export default function WhatsIn() {
  return (
    <Stack component='section' spacing={140} alignItems='center' sx={{
      padding: 140,
    }}>
      <Stack spacing={48} alignItems='center'>
        <Typography variant='displayLarge' color="common.white">
          WHAT IS IN FOR YOU?
        </Typography>
        <Box sx={{
          width: 112,
          border: 4,
          borderColor: '#4B8EF2',
          boxShadow: '0px 6px 21px #4B8EF2',
        }}></Box>
      </Stack>
      
    </Stack>
  ) 
}