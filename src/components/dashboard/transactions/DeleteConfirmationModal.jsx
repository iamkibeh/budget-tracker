/* eslint-disable react/prop-types */
import { useState } from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'
import styled from '@emotion/styled'


const MyButton = styled(Button)`
  color: white;
  font-weight: bold;
  background-color: #2c3e50;
  padding: 8px 16px;
  border-radius: 4px;
  &:hover {
    background-color: #1a252f;
  }
  &:loading {
    background-color: #d32f2f;
  }
  &:disabled {
    background-color: #d32f2f;
  }
  &.delete-btn {
    background-color: #f44336;
    color: white;
    &:hover {
      background-color: #d32f2f;
    }
    &:loading {
      background-color: #d32f2f;
    }
    &:disabled {
      background-color: #d32f2f;
    }
  }
`

const DeleteConfirmationModal = ({ open, onClose, onDelete }) => {
  const [loading, setLoading] = useState(false)

  const handleDelete = async () => {
    setLoading(true)
    await onDelete()
    setLoading(false)
    onClose()
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Delete Transaction</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this transaction?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <MyButton onClick={onClose} disabled={loading} >
          Cancel
        </MyButton>
       
        <MyButton onClick={handleDelete} disabled={loading} className='delete-btn'>
          {loading ? 'Deleting...' : 'Delete'}
        </MyButton>
      </DialogActions>
    </Dialog>
  )
}

export default DeleteConfirmationModal
