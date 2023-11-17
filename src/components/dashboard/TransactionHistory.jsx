import CalenderDaysIcon  from "@heroicons/react/24/outline/CalendarDaysIcon";
import { Divider } from "@mui/material";
import expenseIcon from '/expense-clip-art.png';
import incomeIcon from '/income-clip-art.jpg';
import TransactionListItem from "../reusables/TransactionListItem";
import styled from "@emotion/styled";

const AddButton = styled.button`
  background-color: #2ecc71;
  color: #fff;
  border: none;
  border-radius: 0.2rem;
  padding: 0.5rem .6rem;
  cursor: pointer;
  `
    

const TransactionHistory = () => {
    return (
      <div className='flex flex-col'>
        <div className='flex justify-center items-center gap-2 font-medium'>
          <CalenderDaysIcon className='w-5 h-5' />
          <p className='text-center'>Your Transaction History</p>
        </div>
        <Divider />
        <ul className='p-0 flex-grow h-[60vh] overflow-y-auto'>
          {transactions.map((transaction) => (
            <TransactionListItem
              key={transaction.id}
              transaction={transaction}
            />
          ))}
        </ul>
        <Divider className='mb-4' />

        <div className='flex items-center gap-2 font-medium'>
          <CalenderDaysIcon className='w-5 h-5' />
          <p className='text-xs flex-grow'>Missing Transaction?</p>
          <AddButton>Add Transaction</AddButton>
        </div>
      </div>
    )
};

export default TransactionHistory;


const transactions = [
  {
    id: 1,
    description: 'Income 1',
    amount: 1000,
    date: '2021-09-01',
    receiver: 'John Doe',
    icon: incomeIcon,
    type: 'income',
  },
  {
    id: 2,
    description: 'Expense 1',
    amount: -100,
    date: '2021-09-02',
    receiver: 'Martin Kamau',
    icon: expenseIcon,
    type: 'expense',
  },
  {
    id: 3,
    description: 'Income 2',
    amount: 2000,
    date: '2021-09-01',
    receiver: 'Kimani Riles',
    icon: incomeIcon,
    type: 'income',
  },
  {
    id: 4,
    description: 'Expense 2',
    amount: -500,
    date: '2021-09-01',
    receiver: 'Meggan glitch',
    icon: expenseIcon,
    type: 'expense',
  },
]