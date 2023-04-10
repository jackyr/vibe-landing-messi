import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import EthIcon from '/public/icon-eth.svg'

const listItems = [
  { rank: 1, address: '012312f123...56', value: 12.14, time: '1h' },
  { rank: 2, address: '012312f123...56', value: 12.14, time: '1h' },
  { rank: 3, address: '012312f123...56', value: 12.14, time: '1h' },
  { rank: 4, address: '012312f123...56', value: 12.14, time: '1h' },
  { rank: 5, address: '012312f123...56', value: 12.14, time: '1h' },
]

export default function Holders() {
  return (
    <TableContainer >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ border: '0!important' }}>
              <Typography variant='labelMedium' sx={{ color: 'common.gray-400' }}>RANK</Typography>
            </TableCell>
            <TableCell sx={{ border: '0!important' }}>
              <Typography variant='labelMedium' sx={{ color: 'common.gray-400' }}>ADDRESS</Typography>
            </TableCell>
            <TableCell sx={{ border: '0!important' }}>
              <Typography variant='labelMedium' sx={{ color: 'common.gray-400' }}>VALUE</Typography>
            </TableCell>
            <TableCell sx={{ border: '0!important' }}>
              <Typography variant='labelMedium' sx={{ color: 'common.gray-400' }}>TIME</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listItems.map(v => (
            <TableRow
              key={v.rank}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Typography variant='bodyMedium' sx={{ color: 'common.gray-50' }}>#{v.rank}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant='bodyMedium' sx={{ color: 'common.gray-50' }}>{v.address}</Typography>
              </TableCell>
              <TableCell>
                <Stack direction='row' alignItems='center' spacing={4}>
                  <EthIcon
                    width={8}
                    height={12}
                    color="var(--vb-gray-600)"
                  />
                  <Typography variant='bodyMedium' sx={{ color: 'common.gray-50' }}>{v.value}</Typography>
                </Stack>
              </TableCell>
              <TableCell>
                <Typography variant='bodySmall' sx={{ color: 'common.gray-400' }}>{v.time}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
  </TableContainer>
  )
}