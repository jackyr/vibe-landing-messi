import Box from '@mui/material/Box'

interface TabPanelProps {
  children?: React.ReactNode;
  currentValue: string;
  value: string;
}

export default function TabPanel({
  children,
  value,
  currentValue,
  ...other
}: TabPanelProps) {
  return (
    <Box
      role="tabpanel"
      hidden={value !== currentValue}
      {...other}
    >
      {value === currentValue && children}
    </Box>
  )
}