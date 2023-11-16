import CalenderDaysIcon  from "@heroicons/react/24/outline/CalendarDaysIcon";
const TransactionHistory = () => {
    return (
      <div>
        <div className='flex justify-center items-center gap-2 font-medium border-b'>
          <CalenderDaysIcon className='w-5 h-5'/>
          <p className='text-center'>Your Transaction History</p>
        </div>
        <ul>
          {transactions.map((transaction) => (
            <li key={transaction.id}>
              {transaction.description} - {transaction.amount}
            </li>
          ))}
        </ul>
        <button>Add Transaction</button>
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
    icon: 'https://picsum.photos/200',
  },
  {
    id: 2,
    description: 'Expense 1',
    amount: -100,
    date: '2021-09-02',
    receiver: 'John Doe',
    icon: 'https://picsum.photos/200',
  },
  {
    id: 3,
    description: 'Income 2',
    amount: 2000,
    date: '2021-09-01',
    receiver: 'John Doe',
    icon: 'https://picsum.photos/200',
  },
  {
    id: 4,
    description: 'Expense 2',
    amount: -500,
    date: '2021-09-01',
    receiver: 'John Doe',
    icon: 'https://picsum.photos/200',
  },
]