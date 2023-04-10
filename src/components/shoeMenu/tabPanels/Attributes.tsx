import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import EthIcon from '/public/icon-eth.svg'

const listItems = [
  { title: 'SHOE ENGRAVING', label: 'Silver-lining', desc: '0.1' },
  { title: 'SPEED', label: 'Trasonic', desc: '0.1' },
  { title: 'CHAMPION LEAGUE', label: 'Champion League', desc: '0.1' },
  { title: 'BOOTS', label: 'Digital', desc: '0.1' },
]

export default function Attributes() {
  return (
    <Grid container rowSpacing={{ md: 16, xs: 8 }} columnSpacing={{ md: 16, xs: 8 }} sx={{
      mt: { md: -16, xs: -8 }
    }}>
      {listItems.map((v, i) => (
        <Grid key={i} lg={6} md={4} xs={12} item>
          <Stack spacing={4} sx={{
            bgcolor: 'common.on-surface-5',
            borderRadius: '4px',
            p: 10,
          }}>
            <Typography variant='labelSmall' sx={{
              color: 'common.gray-400',
            }}>{v.title}</Typography>
            <Stack direction='row' justifyContent='space-between'>
              <Typography variant='bodySmall' sx={{
                color: 'common.white',
              }}>{v.label}</Typography>
              <Stack direction='row' alignItems='center' spacing={4}>
                <EthIcon
                  width={8}
                  height={12}
                  color="var(--vb-gray-600)"
                />
                <Typography variant='bodySmall' sx={{
                  color: 'common.white',
                  fontWeight: 700,
                }}>{v.desc}</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
      ))}
    </Grid>
  )
}