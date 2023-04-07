import { memo } from 'react'
import { useMatch } from '@/common/useMedia'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import CupIcon from '/public/icon-cup.svg'
import FootballIcon from '/public/icon-football.svg'
import BootsIcon from '/public/icon-boots.svg'

const listItems = [
  { icon: CupIcon, num: 345, text: 'TROPHIES' },
  { icon: FootballIcon, num: 10, text: 'GOLDEN BALL' },
  { icon: BootsIcon, num: 8, text: 'GOLDEN BOOTS' },
]

export default memo(function AboutMessi() {
  const matchLG = useMatch('lg')
  const matchMD = useMatch('md')
  return (
    <Stack component='section' alignItems='center' sx={{
      mt: 57,
      // px: { xl: 276, lg: 80, md: 75, xs: 20 },
    }}>
      <Stack
        direction={{ xl: 'row', xs: 'column' }}
        justifyContent={{ xl: 'space-between', xs: 'flex-start' }}
        spacing={{ xl: 0, lg: 90, md: 94, xs: 65 }}
        sx={{
          py: { md: 140, xs: 120 },
          width: { xl: 1368, lg: 1000, md: 834 - 76, xs: 390 - 20 },
          pr: { lg: 0, md: 76, xs: 20 },
          ml: { lg: 0, md: 76, xs: 20 },
          backgroundImage: 'url(/messi-portrait.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: { lg: '500px 800px', md: '379px 648px', xs: '233px 400px' },
          backgroundPosition: { xl: 'calc(50% + 30px) 120px', lg: 'right 150px', md: 'calc(100% + 30px), 120px', xs: 'calc(100% + 70px) 290px' },
        }}
      >
        <Stack
          spacing={{ xl: 50, lg: 32, md: 27, xs: 12 }}
          sx={{
            width: { xl: 360, lg: 540, md: 387, xs: '100%' },
            pt: { xl: 140, xs: 0 },
          }}
        >
          <Typography
            variant={ matchLG ? 'displayMedium' : matchMD ? 'displaySmall' : 'headlineMedium' }
            color="common.white"
          >
            ABOUT MESSI
          </Typography>
          <Typography sx={{ 
            fontSize: { xl: 24, lg: 20, md: 18, xs: 14 },
            lineHeight: { xl: '40px', lg: '26px', md: '32px', xs: '20px' },
            color: 'common.gray-200',
          }}>
            Lionel Messi is the greatest footballer of his generation. He has won 32 trophies throughout his career, including seven league titles, five UEFA Champions Leagues, and the UEFA European Championship. With <br/>over 800 official <br/>senior goals to <br/>his name.
          </Typography>
        </Stack>
        <Stack
          alignItems={{ xl: 'flex-end', xs: 'flex-start' }}
          spacing={{ xl: 70, lg: 0, xs: 40 }}
          sx={{
            pt: { xl: 140, xs: 0 },
            width: 'fit-content',
            textAlign: { xl: 'right', xs: 'left' },
            borderLeft: { xl: 0, lg: 1 },
            borderBottom: { xl: 0, lg: 1 },
            borderImageSource: 'linear-gradient(to right, #2E3131, rgba(46, 49, 49, 0))',
            borderImageSlice: 1,
          }}
        >
          {listItems.map((v, i) => {
            const IconComponent = v.icon
            return (<Stack
              key={i}
              spacing={{ lg: 23, md: 40, xs: 12 }}
              direction={{ xl: 'column', xs: 'row' }}
              alignItems={{ xl: 'flex-end', xs: 'center' }}
              sx={{
                width: { xl: 'auto', lg: 414 },
                height: { xl: 'auto', lg: 120 },
                borderTop: { xl: 0, lg: 1 },
                borderImageSource: 'linear-gradient(to right, #2E3131, rgba(46, 49, 49, 0))',
                borderImageSlice: 1,
                pl: { xl: 0, lg: 30 }
              }}
            >
              <IconComponent
                width={ matchMD ? 68 : 40 }
                height={ matchMD ? 68 : 40 }
                color="var(--vb-gray-400)"
              />
              <Stack>
                <Typography
                  variant={ matchLG ? 'displaySmall' : 'headlineLarge'}
                  color="common.white"
                >{v.num}</Typography>
                <Typography
                  variant={ matchLG ? 'headlineLarge' : 'headlineSmall' }
                  color="common.gray-400"
                >{v.text}</Typography>
              </Stack>
            </Stack>)
          })}
        </Stack>
      </Stack>
    </Stack>
  )
})