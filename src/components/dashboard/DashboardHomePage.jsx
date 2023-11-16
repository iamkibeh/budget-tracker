import React, { useRef } from 'react'
import Chart from 'chart.js/auto'
import { Divider, Grid, Paper } from '@mui/material'
import styled from '@emotion/styled'
import { analyticInfo } from '../../utils/analytics'
import Analytics from '../reusables/Analytics'
import TransactionHistory from './TransactionHistory'

const DashboardHomePage = () => {
  const chartRef = useRef(null)

  const ParentDiv = styled.div`
    flexgrow: 1;
  `
  const MyPaper = styled(Paper)`
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '50%'
    `
  const ChartContainer = styled.div`
    position: 'relative',
    height: '20vh',
    maxWidth: '35vw',
    margin: '0 auto',
    `

  React.useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy()
    }

    const ctx = document.getElementById('myChart').getContext('2d')
    chartRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
        ],
        datasets: [
          {
            label: 'Expenses',
            data: [12, 19, 3, 5, 2, 3, 10],
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
          {
            label: 'Income',
            data: [5, 10, 15, 20, 25, 30, 35],
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        maintainAspectRatio: false
      },
    })

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy()
      }
    }
  }, [])

  return (
    <ParentDiv className={'flex gap-4'}>
      <div className='flex-grow'>
        {/* analytics info */}
        <Grid container spacing={3}>
          {analyticInfo.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Analytics
                title={item.title}
                amount={item.amount}
                percentage={item.percentage}
                isLoss={item.isLoss}
                color={item.color}
                extra={item.extra}
                extraMessage={item.extraMessage}
              />
            </Grid>
          ))}
        </Grid>

        <Divider className='my-4' />
        <h2 className='text-xl font-bold mb-4'>Expenses vs Income</h2>
        <Grid item xs={12}>
          <MyPaper className={'bg-white'}>
            <ChartContainer>
              <canvas id='myChart'></canvas>
            </ChartContainer>
          </MyPaper>
        </Grid>
      </div>

      <div className="bg-secondary-color p-2 w-[300px]">
        <TransactionHistory />
      </div>
    </ParentDiv>
  )
}

export default DashboardHomePage
