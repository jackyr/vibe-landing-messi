import { memo } from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

interface PropsType {
  listItems: {
    rank: number
    point: number
    item: number
    amount: number
    address: string
  }[]
}

export default memo(function Dashboard({ listItems }: PropsType) {
  return (
    <Stack
      direction={{ md: 'row', xs: 'column' }}
      justifyContent="space-between"
      spacing={{ lg: 36, md: 24, xs: 14 }}
      sx={{
        p: { lg: 36, md: 24, xs: '24px 0' },
      }}
    >
      {listItems.map((v, i) => (
        <Stack
          key={i}
          direction={{ md: 'column', xs: 'row-reverse' }}
          justifyContent="space-between"
          spacing={{ md: 36, xs: 12 }}
          sx={{
            flex: 1,
            bgcolor: 'common.on-surface-5',
            position: 'relative',
            overflow: 'hidden',
            p: { lg: '28px 28px 28px 56px', md: 24, xs: '16px 16px 16px 48px' },
            ':before': {
              content: `"${v.rank}"`,
              fontSize: 68,
              lineHeight: '50px',
              fontWeight: 700,
              color: 'transparent',
              WebkitTextStroke: '1px var(--vb-gray-800)',
              position: 'absolute',
              left: { lg: -10, md: 24, xs: -8 },
              top: { lg: 28, md: 25, xs: 16 },
            },
          }}
        >
          <Stack
            sx={{
              p: 6,
              border: 1,
              borderColor: 'common.gray-800',
              borderRadius: '4px',
              width: 'fit-content',
              my: { lg: 0, xs: 10 },
              alignSelf: { lg: 'flex-start', md: 'flex-end', xs: 'flex-start' },
            }}
          >
            <Typography variant="bodySmall" sx={{ color: 'common.primary', fontWeight: 700 }}>
              +{v.point} Points
            </Typography>
          </Stack>
          <Stack spacing={{ md: 20, xs: 12 }}>
            <Stack>
              <Typography variant="titleSmall" sx={{ color: 'common.white' }}>
                {v.item} Items
              </Typography>
              <Typography variant="headlineLarge" sx={{ color: 'common.white' }}>
                ${v.amount.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
              </Typography>
            </Stack>
            <Typography variant="bodySmall" sx={{ color: 'common.gray-400' }}>
              {v.address}
            </Typography>
          </Stack>
        </Stack>
      ))}
    </Stack>
  )
})
