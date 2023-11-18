/* eslint-disable react/prop-types */
import styled from '@emotion/styled'
import { Backdrop, Fade, Modal, TextField } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { PencilSquareIcon, XMarkIcon } from '@heroicons/react/24/solid'
import DeleteConfirmationModal from './DeleteConfirmationModal'
import { useContext, useState } from 'react'
import { TransactionContext } from '../../ContextProvider'

const ViewTransactionModal = ({
  transaction,
  setViewTransactionModal,
  viewTransactionModal,
}) => {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const { deleteTransaction, editTransaction } = useContext(TransactionContext)
 

  const handleCloseDeleteModal = () => {
    setDeleteModalOpen(false)
  }

  const handleDeleteTransaction = () => {
    // delete transaction here
    deleteTransaction(transaction.id)
    setDeleteModalOpen(false)
    setViewTransactionModal(false)
  }

  const handleEditTransaction = () => {
    editTransaction(transaction.id, transaction)
    setViewTransactionModal(false)
  }
  return (
    <>
      <Modal
        open={viewTransactionModal}
        onClose={() => setViewTransactionModal(false)}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={viewTransactionModal}>
          <ModalContainer>
            <div className=''>
              <h5 className='text-center m-0 mb-2'>Transaction Details</h5>
            </div>

            {/* transaction details here */}
            <div className='flex gap-4 items-center my-4'>
              <label className='m-0 flex-1'>Date</label>
              <TextField
                id='outlined-basic'
                label='Date'
                variant='outlined'
                fullWidth
                className='flex-[2]'
                defaultValue={transaction?.date}
              />
            </div>

            <div className='flex gap-4 items-center my-4'>
              <label className='m-0 flex-1'>Description</label>
              <TextField
                id='outlined-basic'
                label='Description'
                variant='outlined'
                fullWidth
                className='flex-[2]'
                defaultValue={transaction?.description}
              />
            </div>

            <div className='flex gap-4 items-center my-4'>
              <label className='m-0 flex-1'>Category</label>
              <TextField
                id='outlined-basic'
                label='Category'
                variant='outlined'
                fullWidth
                className='flex-[2]'
                defaultValue={transaction?.category}
              />
            </div>

            <div className='flex gap-4 items-center my-4'>
              <label className='m-0 flex-1'>Amount</label>
              <TextField
                id='outlined-basic'
                label='Amount'
                variant='outlined'
                fullWidth
                className='flex-[2]'
                defaultValue={transaction?.amount}
              />
            </div>

            <div className='flex justify-between'>
              <StyledButton
                type='button'
                className='btn btn-secondary'
                data-bs-dismiss='modal'
                onClick={() => setViewTransactionModal(false)}
              >
                <XMarkIcon className='w-4 h-4 mr-2' />
                Close
              </StyledButton>
              <StyledButton
                type='button'
                className='btn btn-primary'
                onClick={handleEditTransaction}
              >
                <PencilSquareIcon className='w-4 h-4 mr-2' />
                Save Changes
              </StyledButton>
              <StyledButton
                type='button'
                className='btn btn-danger'
                onClick={() => setDeleteModalOpen(true)}
              >
                <DeleteIcon className='w-4 h-4 mr-2' />
                Delete
              </StyledButton>
            </div>

            <DeleteConfirmationModal
              onClose={handleCloseDeleteModal}
              onDelete={handleDeleteTransaction}
              open={deleteModalOpen}
            />
          </ModalContainer>
        </Fade>
      </Modal>
    </>
  )
}

export default ViewTransactionModal

const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  box-shadow: 24px;
  padding: 1rem;
  width: 500px;
`
const StyledButton = styled.button`
  background-color: #e0e0e0;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  padding: 0.5rem 1.2rem;
  font-size: 0.8rem;
  font-weight: 500;
  color: #333333;
  cursor: pointer;
  outline: none;
  :hover {
    background-color: #d0d0d0;
  }
  &.btn-primary {
    background-color: #2ecc71;
    color: white;
    :hover {
      background-color: #27ae60;
    }
  }
  &.btn-danger {
    background-color: #f44336;
    color: white;
    :hover {
      background-color: #d32f2f;
    }
  }
`
