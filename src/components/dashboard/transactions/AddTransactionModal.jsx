/* eslint-disable react/prop-types */
import { useContext } from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  MenuItem,
  Select,
  TextField,
  useMediaQuery,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { TransactionContext } from '../../ContextProvider'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Controller, useForm } from 'react-hook-form'

const AddTransactionModal = ({ open, setOpen }) => {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))
  const { transactions, addTransaction } = useContext(TransactionContext)
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset

  } = useForm()


  const onSubmit = (data) => {
    if (data.type === 'expense') {
      data.amount = -Math.abs(data.amount)
    }

    const myFormData = {
      ...data,
      id: transactions.length + 1,
      date: new Date().toISOString().slice(0, 10),
    }


    addTransaction(myFormData)
    toast.success('Transaction added successfully')
    reset()
    setOpen(false)
  }



  return (
    <>
      <ToastContainer />
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby='responsive-dialog-title'
        // make its width 600px
        maxWidth='sm'
        fullWidth

      >
        <DialogTitle id='responsive-dialog-title' className='text-center'>
          Add a Transaction
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)} id='transaction-form'>
            <FormControl fullWidth>
              <div className='flex gap-4 items-center my-4'>
                <label className='m-0 flex-1'>Amount</label>
                <Controller
                  name='amount'
                  control={control}
                  render={({ field }) => (
                    <TextField
                      id='amount'
                      label='Amount'
                      variant='outlined'
                      fullWidth
                      type='number'

                      className='flex-[2]'
                      {...field}
                      error={Boolean(errors.amount)}
                      helperText={errors.amount && 'Amount is required'}
                    />
                  )}
                  rules={{ required: true }}
                />
              </div>

              <div className='flex gap-4 items-center my-4'>
                <label className='m-0 flex-1'>Category</label>
                <Controller
                  name='category'
                  control={control}
                  render={({ field }) => (
                    <TextField
                      id='category'
                      label='Category'
                      variant='outlined'
                      fullWidth
                      className='flex-[2]'
                      {...field}
                      error={Boolean(errors.category)}
                      helperText={errors.category && 'Category is required'}
                    />
                  )}
                  rules={{ required: true }}
                />
              </div>

              <div className='flex gap-4 items-center my-4'>
                <label className='m-0 flex-1'>Type</label>
              
                <div className='flex-[2]'>
                  <Controller
                    name='type'
                    control={control}
                    render={({ field }) => (
                      <Select
                        id='type'
                        variant='outlined'
                        label='Type'
                        fullWidth
                        className='flex-[2]'
                        {...field}
                        error={Boolean(errors.type)}
                        helperText={errors.type && 'Type is required'}
                      >
                        <MenuItem value='income'>Income</MenuItem>
                        <MenuItem value='expense'>Expense</MenuItem>
                      </Select>
                    )}
                    rules={{ required: true }}
                  />
                  {errors.type && (
                    <span className='text-red-500 text-xs'>
                      Type is required
                    </span>
                  )}
                </div>
              </div>

              <div className='flex gap-4 items-center my-4'>
                <label className='m-0 flex-1'>Description</label>
                <Controller
                  name='description'
                  control={control}
                  render={({ field }) => (
                    <TextField
                      id='description'
                      label='Description'
                      variant='standard'
                      multiline
                      fullWidth
                      className='flex-[2]'
                      {...field}
                      error={Boolean(errors.description)}
                      helperText={
                        errors.description && 'Description is required'
                      }
                    />
                  )}
                  rules={{ required: true }}
                />
              </div>
              <div className='flex gap-4 items-center my-4'>
                <label className='m-0 flex-1'>Notes</label>
                <Controller
                  name='notes'
                  control={control}
                  render={({ field }) => (
                    <TextField
                      id='notes'
                      variant='standard'
                      label='Notes'
                      placeholder='Optional Notes'
                      multiline
                      className='flex-[2]'
                      {...field}
                    />
                  )}
                />
              </div>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions className='flex justify-between'>
          <Button
            onClick={() => setOpen(false)}
            autoFocus
            className='bg-secondary-color-color capitalize'
            variant='contained'
          >
            Cancel Transaction
          </Button>
          <Button
            autoFocus
            className='btn text-white capitalize'
            type='submit'
            id='transaction-form'
            form='transaction-form'
          >
            Add Transaction
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default AddTransactionModal
