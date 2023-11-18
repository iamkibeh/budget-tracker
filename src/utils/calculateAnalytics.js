export const calculateAnalytics = (transactions) => {
  const totalExpenditure = transactions.reduce((total, transaction) => {
    return transaction.type === 'expense'
      ? total + Math.abs( transaction.amount)
      : total
  }, 0)

  const totalIncome = transactions.reduce((total, transaction) => {
    return transaction.type === 'income' ? total +Math.abs(transaction.amount) : total
  }, 0)

  const totalBudget = totalIncome // Assuming total budget is the total income
  const totalSavings = totalIncome - totalExpenditure

  const overspent = totalExpenditure > totalIncome
  const extraExpenditure = overspent ? totalExpenditure - totalIncome : 0
  const extraSavings = !overspent ? totalSavings : 0

  //   const expenditurePercentage = totalIncome ? (totalExpenditure / totalIncome) * 100 : 0;
  const expenditurePercentage =
    Math.round((totalExpenditure / totalIncome) * 100 * 100) / 100
  //   const savingsPercentage = totalIncome ? (totalSavings / totalIncome) * 100 : 0;
  const savingsPercentage =
    Math.round((totalSavings / totalIncome) * 100 * 100) / 100

  return [
    {
      title: 'Total Expenditure',
      description: 'Total amount spent',
      color: 'success',
      amount: totalExpenditure,
      isLoss: overspent,
      extra: extraExpenditure,
      percentage: expenditurePercentage,
      extraMessage: 'You overspent by',
    },
    {
      title: 'Total Income',
      description: 'Total amount earned',
      color: 'warning',
      amount: totalIncome,
      isLoss: false,
      extra: 0,
      percentage: 100,
      extraMessage: '',
    },
    {
      title: 'Total Budget',
      description: 'Total amount budgeted',
      color: 'warning',
      amount: totalBudget,
      isLoss: false,
      extra: 0,
      percentage: 100,
      extraMessage: '',
    },
    {
      title: 'Total Savings',
      description: 'Total amount saved',
      color: 'info',
      amount: totalSavings,
      isLoss: false,
      extra: extraSavings,
      percentage: savingsPercentage,
      extraMessage: 'You saved an extra',
    },
  ]
}
