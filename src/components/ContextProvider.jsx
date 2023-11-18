/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react'
import { myTransactions } from '../utils/myTransactions'
import { calculateAnalytics } from '../utils/calculateAnalytics'

// Create a new context
export const TransactionContext = createContext()

// Create a context provider component
export const ContextProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem('transactions')
    return savedTransactions ? JSON.parse(savedTransactions) : myTransactions
  })

  // Save transactions to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions))
  }, [transactions])

  // Define functions to update the transactions state
  const addTransaction = (newTransaction) => {
    if (newTransaction.type === 'income') {
      newTransaction.amount = Math.abs(newTransaction.amount)
    }
    // check if there are transactions with same id and remove them
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== newTransaction.id
    )
    // setTransactions([...transactions, newTransaction]);
    setTransactions((prevTransaction) => [...prevTransaction, newTransaction])
    // persist the transaction state to local storage
    localStorage.setItem(
      'transactions',
      JSON.stringify([...updatedTransactions, newTransaction])
    )
  }

  const deleteTransaction = (id) => {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    )
    setTransactions(updatedTransactions)
    localStorage.setItem('transactions', JSON.stringify(updatedTransactions))
  }

  const calculateBudget = () => {
    return transactions.reduce(
      (total, transaction) => total + parseInt(transaction.amount),
      0
    )
  }

  const editTransaction = (id, editedTransaction) => {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    )
    setTransactions([...updatedTransactions, editedTransaction])
    localStorage.setItem(
      'transactions',
      JSON.stringify([...updatedTransactions, editedTransaction])
    )
  }

  const analytics = calculateAnalytics(transactions)

  // Provide the state and functions to the child components
  return (
    <TransactionContext.Provider
      value={{
        transactions,
        addTransaction,
        deleteTransaction,
        calculateBudget,
        editTransaction,
        analytics,
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
