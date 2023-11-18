import CalenderDaysIcon  from "@heroicons/react/24/outline/CalendarDaysIcon";
import { Divider } from "@mui/material";
import TransactionListItem from "../reusables/TransactionListItem";
import styled from "@emotion/styled";
import AddTransactionModal from "./transactions/AddTransactionModal";
import { useContext, useState } from "react";
import { TransactionContext } from "../ContextProvider";

const AddButton = styled.button`
  background-color: #2ecc71;
  color: #fff;
  border: none;
  border-radius: 0.2rem;
  padding: 0.5rem .6rem;
  cursor: pointer;
  `
    

const TransactionHistory = () => {
    const [openModal, setOpenModal] = useState(false)
  const {transactions} = useContext(TransactionContext)
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
          <AddButton onClick={()=> setOpenModal(true)}>Add Transaction</AddButton>
        </div>
        <AddTransactionModal open={openModal}   setOpen={setOpenModal}/>
      </div>
    )
};

export default TransactionHistory;

