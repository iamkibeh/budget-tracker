import PropTypes from 'prop-types'
import { useMemo } from 'react'
import { Box, IconButton, TablePagination as Pagination } from '@mui/material'
import {
  FirstPage,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  LastPage,
} from '@mui/icons-material'

function TablePaginationActions(props) {
  const { count, page, rowsPerPage, onPageChange } = props

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0)
  }

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1)
  }

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1)
  }

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1))
  }

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label='first page'
      >
        <FirstPage />
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label='previous page'
      >
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label='next page'
      >
        <KeyboardArrowRight />
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label='last page'
      >
        <LastPage />
      </IconButton>
    </Box>
  )
}

const TablePagination = ({
  rows,
  page,
  setPage,
  rowsPerPage,
  setRowsPerPage,
  rowsPerPageOptions,
}) => {
  const count = useMemo(() => rows.length, [rows])

  const onRowsPerPageChange = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10))
    setPage(0)
  }

  const onPageChange = (_e, page) => {
    setPage(page)
  }

  if (count < rowsPerPage) {
    return null
  }

  return (
    <Pagination
      sx={{ mt: 3 }}
      component='div'
      page={page}
      count={count}
      rowsPerPage={rowsPerPage}
      rowsPerPageOptions={rowsPerPageOptions}
      onRowsPerPageChange={onRowsPerPageChange}
      onPageChange={onPageChange}
      ActionsComponent={TablePaginationActions}
    />
  )
}

export default TablePagination

TablePagination.propTypes = {
  rows: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  setRowsPerPage: PropTypes.func.isRequired,
  rowsPerPageOptions: PropTypes.array,
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,

  onPageChange: PropTypes.func.isRequired,
}
