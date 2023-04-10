import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export default function Details() {  
  return (
    <Stack spacing={40}>
      {new Array(10).fill('').map((v, i) => (
        <Stack key={i} spacing={16}>
          <Typography variant='titleMedium' sx={{
            color: 'common.white',
          }}>About</Typography>
          <Typography variant='bodyMedium' sx={{
            color: 'common.gray-200',
          }}>
            The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the Ethereum blockchain.
          </Typography>
        </Stack>
      ))}
    </Stack>
  )
}