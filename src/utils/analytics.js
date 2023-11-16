export const userActions = {
  // Track when a user creates a new budget
  createBudget: {
    category: 'Budget',
    action: 'Create',
    label: 'New Budget',
  },
  // Track when a user deletes a budget
  deleteBudget: {
    category: 'Budget',
    action: 'Delete',
    label: 'Delete Budget',
  },
  // Track when a user adds a new expense
  addExpense: {
    category: 'Expense',
    action: 'Add',
    label: 'New Expense',
  },
  // Track when a user deletes an expense
  deleteExpense: {
    category: 'Expense',
    action: 'Delete',
    label: 'Delete Expense',
  },
  // Track when a user updates an expense
  updateExpense: {
    category: 'Expense',
    action: 'Update',
    label: 'Update Expense',
  },
}

export const analyticInfo = [
  {
    title: 'Total Expenditure',
    description: 'Total amount spent',
    color: 'success',
    amount: 4000,
    isLoss: true,
    extra: 2000,
    percentage: 50,
    extraMessage: 'You overspent by',
  },
  {
    title: 'Total Income',
    description: 'Total amount earned',
    color: 'warning',
    amount: 3000,
    isLoss: false,
    extra: 1000,
    percentage: 50,
    extraMessage: 'You made an extra',
  },
  {
    title: 'Total Budget',
    description: 'Total amount budgeted',
    color: 'warning',
    amount: 5000,
    isLoss: false,
    extra: 1000,
    percentage: 15,
    extraMessage: 'Your budget exceeded by',
  },
  {
    title: 'Total Savings',
    description: 'Total amount saved',
    color: 'info',
    amount: 1000,
    isLoss: false,
    extra: 2000,
    percentage: 50,
    extraMessage: 'You saved an extra',
  },
]
