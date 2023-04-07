import Button from '@mui/material/Button'

interface PropsType {
  handleClose: () => void
}

export default function ShoeMenuExpanded({ handleClose }: PropsType) {
  return (
    <Button onClick={handleClose}>close</Button>
  )
}