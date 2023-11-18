import React, { useContext, useRef } from 'react'
import Chart from 'chart.js/auto'
import { Divider, Grid, Paper } from '@mui/material'
import styled from '@emotion/styled'
import Analytics from '../reusables/Analytics'
import TransactionHistory from './TransactionHistory'
import { TransactionContext } from '../ContextProvider'

const DashboardHomePage = () => {
  const chartRef = useRef(null)
  const {analytics, transactions} = useContext(TransactionContext)

  const ParentDiv = styled.div`
    flexgrow: 1;
  `
  const MyPaper = styled(Paper)`
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '50%'
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
          'August',
          'September',
          'October',
          'November',
          'December',
        ],
        datasets: [
          {
            label: 'Expenses',
            data: transactions.filter((transaction) => transaction.type === 'expense').map((transaction) =>Math.abs(transaction.amount)),
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
          {
            label: 'Income',
            data: transactions.filter((transaction) => transaction.type === 'income').map((transaction) => Math.abs(transaction.amount)),
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
        maintainAspectRatio: false,
      },
    })

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy()
      }
    }
  }, [])


  return (
    <ParentDiv className={'flex gap-4 flex-col lg:flex-row '}>
      <div className='flex-grow'>
        {/* analytics info */}
        <Grid container spacing={3}>
          {analytics.map((item, index) => (
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
            <div className='relative w-[40vw] h-[40vh]'>
              <canvas id='myChart'></canvas>
            </div>
          </MyPaper>
        </Grid>
      </div>

      <div className='bg-secondary-color p-2 w-[300px]'>
        <TransactionHistory />
      </div>
    </ParentDiv>
  )
}

export default DashboardHomePage
