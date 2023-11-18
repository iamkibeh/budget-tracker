import { useState, useEffect, useRef } from 'react'
// import { Line, Pie, Bar } from 'chart.js/auto'
import { myTransactions } from '../../../utils/myTransactions'
import { Chart } from 'chart.js'

const Reports = () => {
  const [expensesOverTime, setExpensesOverTime] = useState({})
  const [expensesByCategory, setExpensesByCategory] = useState({})
  const [incomeAndExpensesByMonth, setIncomeAndExpensesByMonth] = useState({})

  const chartRef = useRef(null)
  const expensesByCategoryRef = useRef(null)
  const incomeAndExpensesByMonthRef = useRef(null)

  // Initialize an object to hold the totals for each month
  const totalsByMonth = {
    
  }

  // Process each transaction
  myTransactions.forEach((transaction) => {
    // Extract the month from the date
    const month = new Date(transaction.date).getMonth()
    // Initialize the totals for this month if they haven't been initialized yet
    if (!totalsByMonth[month]) {
      totalsByMonth[month] = { income: 0, expense: 0 }
    }

    // Update the totals for this month
    if (transaction.type === 'Income') {
      totalsByMonth[month].income += transaction.amount
    } else if (transaction.type === 'Expense') {
      totalsByMonth[month].expense += Math.abs(transaction.amount) // Use Math.abs to convert the amount to a positive number
    }
  })

  
  useEffect(() => {
    const fetchData = async () => {
      // const result = await axios.get('/api/expenses');
      // const expenses = result.data;
      const expenses = myTransactions
      // Expenses over time
      const expensesOverTimeData = {
        labels: expenses.map((expense) => expense.date),
        datasets: [
          {
            label: 'Expenses over time',
            data: expenses.map((expense) => expense.amount),
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      }
      setExpensesOverTime(expensesOverTimeData)

      // Expenses by category
      const expensesByCategoryData = {
        labels: expenses.map((expense) => expense.category),
        datasets: [
          {
            label: 'Expenses by category',
            data: expenses.map((expense) => expense.amount),
            backgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
              '#4BC0C0',
              '#9966FF',
              '#FF9F40',
            ],
            hoverBackgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
              '#4BC0C0',
              '#9966FF',
              '#FF9F40',
            ],
          },
        ],
      }
      setExpensesByCategory(expensesByCategoryData)

      // Income and expenses by month
      const incomeAndExpensesByMonthData = {
        labels: Object.keys(totalsByMonth).map((month) => new Date(2023, month).toLocaleString('default', { month: 'long' })),
        datasets: [
          {
            label: 'Income',
            data: Object.values(totalsByMonth).map((totals) => totals.income),
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
          {
            label: 'Expenses',
            data: Object.values(totalsByMonth).map((totals) => totals.expense),
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
        ],
      }
      setIncomeAndExpensesByMonth(incomeAndExpensesByMonthData)
    }

    fetchData()
    console.log({ totalsByMonth })
  }, [])

  useEffect(() => {
    // Expenses over time
    if (chartRef && chartRef.current) {
      chartRef.current.destroy()
    }

    const expensesOverTimeCtx = document
      .getElementById('expensesOverTime')
      .getContext('2d')
    chartRef.current = new Chart(expensesOverTimeCtx, {
      type: 'line',
      data: expensesOverTime,
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    })

    return () => {
      if (chartRef && chartRef.current) {
        chartRef.current.destroy()
      }
    }
  }, [expensesOverTime, expensesByCategory, incomeAndExpensesByMonth])

  useEffect(() => {
    if (expensesByCategoryRef && expensesByCategoryRef.current) {
      expensesByCategoryRef.current.destroy()
    }

    const expensesOverTimeCtx = document
      .getElementById('expensesByCategory')
      .getContext('2d')
    expensesByCategoryRef.current = new Chart(expensesOverTimeCtx, {
      type: 'line',
      data: expensesByCategory,
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    })
    return () => {
      if (expensesByCategoryRef && expensesByCategoryRef.current) {
        expensesByCategoryRef.current.destroy()
      }
    }
  }, [expensesByCategory])

  useEffect(() => {
    if (incomeAndExpensesByMonthRef && incomeAndExpensesByMonthRef.current) {
      incomeAndExpensesByMonthRef.current.destroy()
    }
    const expensesOverTimeCtx = document
      .getElementById('incomeAndExpensesByMonth')
      .getContext('2d')
    incomeAndExpensesByMonthRef.current = new Chart(expensesOverTimeCtx, {
      //  create a bar chart, with necesary data
      type: 'bar',
      data: incomeAndExpensesByMonth,
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    })
    return () => {
      if (incomeAndExpensesByMonthRef && incomeAndExpensesByMonthRef.current) {
        incomeAndExpensesByMonthRef.current.destroy()
      }
    }
  }, [incomeAndExpensesByMonth])

  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-2xl font-bold'>Reports</h1>
      <div className='w-full max-w-4xl'>
        <div className='flex flex-col items-center justify-center'>
          <h2 className='text-xl font-bold'>Expenses over time</h2>
          {/* <Line data={expensesOverTime} /> */}
          {/* use canvas to embed the chart with its configs */}
          <canvas id='expensesOverTime'></canvas>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h2 className='text-xl font-bold'>Expenses by category</h2>
          {/* <Pie data={expensesByCategory} /> */}
          <canvas id='expensesByCategory'></canvas>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h2 className='text-xl font-bold'>Income and expenses by month</h2>
          {/* <Bar data={incomeAndExpensesByMonth} /> */}
          <canvas id='incomeAndExpensesByMonth'></canvas>
        </div>
      </div>
    </div>
  )
}

export default Reports
