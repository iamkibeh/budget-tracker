/* eslint-disable react/prop-types */
import { useState } from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Select,
  TextField,
  useMediaQuery,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'

const AddTransactionModal = ({ open, setOpen }) => {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    // onSubmit({ description, amount });
    // logic to submit form

    console.log({ description, amount })
    setDescription('')
    setAmount('')
  }

  return (
    <>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby='responsive-dialog-title'
      >
        <DialogTitle id='responsive-dialog-title' className='text-center'>
          Add a Transaction
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <div className='flex gap-4 items-center my-4'>
              <label className='m-0 flex-1'>Amount</label>
              <TextField
                id='outlined-basic'
                label='Amount'
                variant='outlined'
                fullWidth
                className='flex-[2]'
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
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
              />
            </div>

            <div className='flex gap-4 items-center my-4'>
              <label className='m-0 flex-1'>Type</label>
              <Select
                id='type'
                variant='outlined'
                label='Type'
                fullWidth
                className='flex-[2]'
              >
                <MenuItem value='income'>Income</MenuItem>
                <MenuItem value='expense'>Expense</MenuItem>
              </Select>
            </div>

            <div className='flex gap-4 items-center my-4'>
              <label className='m-0 flex-1'>Description</label>
              <TextField
                id='outlined-basic'
                label='Description'
                variant='standard'
                multiline
                fullWidth
                className='flex-[2]'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>


            <div className='flex gap-4 items-center my-4'>
              <label className='m-0 flex-1'>Notes</label>
              <TextField
                id='notes'
                variant='standard'
                label='Notes'
                placeholder='Notes'
                multiline
                className='flex-[2]'
              />
            </div>
          </form>
        </DialogContent>
        <DialogActions className='flex justify-between'>
          <Button
            onClick={() => setOpen(false)}
            autoFocus
            className='bg-secondary-color-color capitalize'
          >
            Cancel Transaction
          </Button>
          <Button
            onClick={handleSubmit}
            autoFocus
            className='btn text-white capitalize'
          >
            Add Transaction
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default AddTransactionModal
