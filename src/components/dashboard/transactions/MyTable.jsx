import { myTransactions } from '../../../utils/myTransactions'
import Table from '../../reusables/table'
import { useState, useEffect } from 'react'
import ViewTransactionModal from './ViewTransactionModal'
import AddTransactionModal from './AddTransactionModal'


const MyTable = () => {
  const [transactions, setTransactions] = useState([])
  const [loading, setLoading] = useState(true)
  const [viewTransactionModal, setViewTransactionModal] = useState(false)
  const [selectedTransaction, setSelectedTransaction] = useState(null)
  const [addTransactionModal, setAddTransactionModal] = useState(false)

  useEffect(() => {
    const fetchTransactions = async () => {
      setTimeout(() => {}, 3000)
      setTransactions(myTransactions)
      setLoading(false)
    }
    fetchTransactions()
  }, [])

  const handleRowClick = (transaction) => {
    console.log({ transaction })
    setSelectedTransaction(transaction)
    setViewTransactionModal(true)
  }

  return (
    <>
      <Table
        title='Transactions'
        columns={[
          { selector: 'date', name: 'Date' },
          { selector: 'description', name: ' Name (description)' },
          { selector: 'category', name: 'Category' },
          { selector: 'amount', name: 'Amount' },
          { selector: 'type', name: 'Type'}
        ]}
        data={transactions}
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

        <ViewTransactionModal setViewTransactionModal={setViewTransactionModal} transaction={selectedTransaction} viewTransactionModal={viewTransactionModal}  /> 
      <AddTransactionModal open={addTransactionModal} setOpen={setAddTransactionModal}/>
    </>
  )
}

export default MyTable
