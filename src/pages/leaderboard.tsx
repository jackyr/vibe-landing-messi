import { memo } from 'react'
import Head from 'next/head'
import Header from '@/components/header/Header'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Dashboard from '@/components/leaderboard/Dashboard'
import DataTable from '@/components/leaderboard/DataTable'

export default memo(function LeaderBoard() {
  const listItems = [
    { rank: 1, point: 228, item: 56, amount: 5600032, address: '0x34f675567657561.....5656' },
    { rank: 2, point: 228, item: 56, amount: 5600032, address: '0x34f675567657561.....5656' },
    { rank: 3, point: 228, item: 56, amount: 5600032, address: '0x34f675567657561.....5656' },
    { rank: 4, point: 228, item: 56, amount: 5600032, address: '0x34f675567657561.....5656' },
    { rank: 5, point: 228, item: 56, amount: 5600032, address: '0x34f675567657561.....5656' },
    { rank: 6, point: 228, item: 56, amount: 5600032, address: '0x34f675567657561.....5656' },
    { rank: 7, point: 228, item: 56, amount: 5600032, address: '0x34f675567657561.....5656' },
    { rank: 8, point: 228, item: 56, amount: 5600032, address: '0x34f675567657561.....5656' },
    { rank: 9, point: 228, item: 56, amount: 5600032, address: '0x34f675567657561.....5656' },
    { rank: 10, point: 228, item: 56, amount: 5600032, address: '0x34f675567657561.....5656' },
  ]

  return (
    <>
      <Head>
        <title>Leader Board</title>
        <meta name="description" content="Messi" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, viewport-fit=cover" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container
        component="main"
        maxWidth="xl"
        disableGutters
        sx={{
          px: { xl: 140, lg: 80, md: 41, xs: 16 },
        }}
      >
        <Box
          sx={{
            borderLeft: { md: 1, xs: 0 },
            borderRight: { md: 1, xs: 0 },
            borderBottom: { md: 1, xs: 0 },
            borderColor: { md: 'common.gray-800' },
          }}
        >
          <Dashboard listItems={listItems.slice(0, 3)} />
          <DataTable listItems={listItems.slice(3)} />
        </Box>
      </Container>
    </>
  )
})
