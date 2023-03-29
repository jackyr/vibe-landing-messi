import Box from '@mui/material/Box'
import NextImage from 'next/image'

interface PropsType {
  sx: any
}

const highlightDotStyle = {
  width: 42,
  height: 42,
  borderRadius: '50%',
  bgcolor: 'rgba(255, 255, 255, 0.3)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  '&:before': {
    content: '""',
    width: 24,
    height: 24,
    borderRadius: '50%',
    bgcolor: 'white',
  }
}

export default function ShoePic({ sx }: PropsType) {
  return (
    <Box sx={Object.assign({}, sx, {
      fontSize: 0,
      position: 'relative',
      overflow: 'hidden',
    })}>
      <NextImage
        alt="boots collection"
        src="/boots-collection.png"
        fill
      />
      <Box sx={Object.assign({ top: '53.8%', left: '17.8%' }, highlightDotStyle)}></Box>
      <Box sx={Object.assign({ top: '30.8%', left: '44.8%' }, highlightDotStyle)}></Box>
      <Box sx={Object.assign({ top: '48.5%', left: '73.3%' }, highlightDotStyle)}></Box>
    </Box>
  )
}