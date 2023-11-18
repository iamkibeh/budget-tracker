import { Money } from '@mui/icons-material';
import { useContext } from 'react';
import { TransactionContext } from '../ContextProvider';
// eslint-disable-next-line react/prop-types
function Balance() {
    // consume the context and get transactions from the context
    const { transactions , calculateBudget } = useContext(TransactionContext);
    // calculate the balance
    const balance = transactions.reduce((acc, curr) => {
        const amount = Number(curr.amount);
        return curr.type === 'income' ? acc + amount : acc - amount;
    }, 0);

    
    return (
      <div className='flex gap-2 items-center text-primary-color'>
        <Money className='h-5 w-5' />
        <p>{`${calculateBudget()}`}</p>
      </div>
    )
}

export default Balance;
