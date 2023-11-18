import styled from '@emotion/styled'
import { Divider } from '@mui/material'
import PropTypes from 'prop-types'
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline'
import expenseIcon from '/expense-clip-art.png'
import incomeIcon from '/income-clip-art.jpg'

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem .4rem;
  margin: 0.5rem 0;
  border-radius: 0.2rem;
  background-color: ${({ type }) =>
    type === 'income' ? '#e6f7ff' : '#fff2e8'};
    gap: .4rem;
`

const TransactionInfo = styled.div`
  display: flex;
  flex-direction: column;
    flex-grow: 1;
    font-size: .9rem;
`

const TransactionAmount = styled.span`
  font-weight: semi-bold;
  font-size: .9rem;
  color: ${({ type }) => (type === 'income' ? '#2ecc71' : '#e74c3c')};
`

const TransactionDate = styled.span`
  font-size: 0.7rem;
  color: #999;
`

const TransactionListItem = ({ transaction }) => {
  const { description, amount, type, date } = transaction

  return (
    <>
      <ListItem type={type}>
        <img src={
          type === 'income' ? incomeIcon : expenseIcon
        } alt={description} className='w-8 h-8' />
        <TransactionInfo>
          <span>{description}</span>
          <TransactionDate>
            {new Date(date).toLocaleDateString()}
          </TransactionDate>
        </TransactionInfo>
        <TransactionAmount type={type}>
          {type === 'income' ? '+' : '-'}${Math.abs(amount)}
        </TransactionAmount>
        <EllipsisVerticalIcon className='w-5 h-5 cursor-pointer' />
      </ListItem>
      <Divider />
    </>
  )
}

TransactionListItem.propTypes = {
  transaction: PropTypes.shape({
    description: PropTypes.string.isOptional,
    amount: PropTypes.number.isRequired,
    type: PropTypes.oneOf(['income', 'expense']).isRequired,
    date: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
}

export default TransactionListItem
