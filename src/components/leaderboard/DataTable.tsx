import { memo } from 'react'
import useMedia from '@/common/useMedia'
import useThemeMode from '@/common/useThemeMode'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import ShareIcon from '/public/icon-share.svg'

interface PropsType {
  listItems: {
    rank: number
    point: number
    item: number
    amount: number
    address: string
  }[]
}

const StyledThTableCell = styled(TableCell)(({ theme }) => ({
  padding: '4px 16px',
  borderTop: `1px solid ${theme.palette.common['gray-800']}!important`,
  borderBottom: `1px solid ${theme.palette.common['gray-800']}!important`,
  whiteSpace: 'nowrap',
  [theme.breakpoints.down('md')]: {
    borderTop: '0!important',
  },
}))

const StyledTdTableCell = styled(TableCell)(() => ({
  padding: '24px 16px',
}))

export default memo(function Dashboard({ listItems }: PropsType) {
  const { isMobile } = useMedia()
  const { isDarkMode } = useThemeMode()

  const stickyCellStyle = {
    position: 'sticky',
    right: 0,
    pl: 32,
    background: isDarkMode
      ? 'linear-gradient(270deg, #080808 0%, #080808 81.71%, rgba(8, 8, 8, 0) 100%)'
      : 'linear-gradient(270deg, #F7FBFD 0%, #F7FBFD 81.71%, rgba(247, 251, 253, 0) 100%);',
    ['.MuiTableRow-root:hover &']: {
      background: 'var(--vb-surface-4)',
    },
  }

  function handleShareClick(item: (typeof listItems)[number]) {
    console.log(item)
  }

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <StyledThTableCell align="center">
              <Typography variant="labelMedium" sx={{ color: 'common.gray-400' }}>
                RANK
              </Typography>
            </StyledThTableCell>
            <StyledThTableCell>
              <Typography variant="labelMedium" sx={{ color: 'common.gray-400' }}>
                {isMobile ? 'ITEM & AMOUNT' : 'AMOUNT'}
              </Typography>
            </StyledThTableCell>
            {!isMobile && (
              <StyledThTableCell>
                <Typography variant="labelMedium" sx={{ color: 'common.gray-400' }}>
                  ITEM
                </Typography>
              </StyledThTableCell>
            )}
            <StyledThTableCell>
              <Typography variant="labelMedium" sx={{ color: 'common.gray-400' }}>
                ADDRESS
              </Typography>
            </StyledThTableCell>
            <StyledThTableCell align="center" sx={isMobile ? stickyCellStyle : null}>
              <Typography variant="labelMedium" sx={{ color: 'common.gray-400' }}>
                POINT
              </Typography>
            </StyledThTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listItems.map((v) => (
            <TableRow key={v.rank}>
              <StyledTdTableCell align="center">
                <Typography variant="bodySmall" sx={{ color: 'common.white' }}>
                  #{v.rank}
                </Typography>
              </StyledTdTableCell>
              <StyledTdTableCell>
                <Stack>
                  {isMobile && (
                    <Typography variant="bodyMedium" sx={{ color: 'common.white' }}>
                      {v.item}
                    </Typography>
                  )}
                  <Typography variant="bodyMedium" sx={{ color: isMobile ? 'common.gray-400' : 'common.white' }}>
                    ${v.amount}
                  </Typography>
                </Stack>
              </StyledTdTableCell>
              {!isMobile && (
                <StyledTdTableCell>
                  <Typography variant="bodyMedium" sx={{ color: 'common.white' }}>
                    {v.item}
                  </Typography>
                </StyledTdTableCell>
              )}
              <StyledTdTableCell>
                <Stack direction="row" alignItems="center" spacing={4}>
                  <Typography
                    variant="bodyMedium"
                    sx={{
                      color: 'common.gray-400',
                      ['.MuiTableRow-root:hover &']: {
                        color: 'common.white',
                      },
                    }}
                  >
                    {v.address}
                  </Typography>
                  <Box
                    sx={{
                      ml: '15px!important',
                      visibility: 'hidden',
                      fontSize: 0,
                      cursor: 'pointer',
                      ['.MuiTableRow-root:hover &']: {
                        visibility: 'visible',
                      },
                    }}
                    onClick={() => handleShareClick(v)}
                  >
                    <ShareIcon width={16} height={16} color="var(--vb-white)" />
                  </Box>
                </Stack>
              </StyledTdTableCell>
              <StyledTdTableCell align="center" sx={isMobile ? stickyCellStyle : null}>
                <Typography variant="bodyLarge" sx={{ color: 'common.white', fontWeight: 700 }}>
                  {v.point}
                </Typography>
              </StyledTdTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
})
