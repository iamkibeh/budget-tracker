import Table from '../../reusables/table'
import { useState, useEffect, useContext } from 'react'
import ViewTransactionModal from './ViewTransactionModal'
import AddTransactionModal from './AddTransactionModal'
import { TransactionContext } from '../../ContextProvider'

const MyTable = () => {
  const [loading, setLoading] = useState(true)
  const [viewTransactionModal, setViewTransactionModal] = useState(false)
  const [selectedTransaction, setSelectedTransaction] = useState(null)
  const [addTransactionModal, setAddTransactionModal] = useState(false)
  // get transactions from the context
  const { transactions } = useContext(TransactionContext)

  useEffect(() => {
    setTimeout(() => {}, 2500)
    setLoading(false)
  }, [])

  const handleRowClick = (transaction) => {
    setSelectedTransaction(transaction)
    setViewTransactionModal(true)
  }

  console.log(transactions.sort((a, b) => new Date(b.date) - new Date(a.date)))
  return (
    <>
      <Table
        title='Transactions'
        columns={[
          { selector: 'date', name: 'Date' },
          { selector: 'description', name: ' Name (description)' },
          { selector: 'category', name: 'Category' },
          { selector: 'amount', name: 'Amount' },
          { selector: 'type', name: 'Type' },
        ]}
        data={transactions.sort((a, b) => new Date(b.date) - new Date(a.date))}
        emptyMessage='No transactions found'
        showSearch
        // onSearch={(value) => console.log(value)}
        buttons={[
          {
            label: 'Add Transaction',
            onClick: () => setAddTransactionModal(true),
            children: 'Add Transaction',
          },
        ]}
        onRowClicked={handleRowClick}
        loading={loading}
      ></Table>

      <ViewTransactionModal
        setViewTransactionModal={setViewTransactionModal}
        transaction={selectedTransaction}
        viewTransactionModal={viewTransactionModal}
      />
      <AddTransactionModal
        open={addTransactionModal}
        setOpen={setAddTransactionModal}
      />
    </>
  )
}

export default MyTable
