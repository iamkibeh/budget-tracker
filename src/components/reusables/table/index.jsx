import { Box, Button, Stack, Typography } from '@mui/material'
import { ButtonsContainer, StyledSearch } from './styles'
import { useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import TablePagination from './pagination'
import { CircularLoader } from '../CircularLoader'
import ErrorPage from '../ErrorPage'
import TableBody from './body'

const NoData = ({ message }) => {
  return (
    <Box sx={{ py: 3 }}>
      <Typography variant='h6' textAlign='center' color='grey'>
        No data found
      </Typography>
      <Typography variant='body2' textAlign='center' color='grey'>
        {message || "We couldn't find any data matching your search"}
      </Typography>
    </Box>
  )
}

const TableContainer = ({ loading, error, rows, message, children }) => {
  if (loading) return <CircularLoader />
  if (error) return <ErrorPage error={error} title='Oops!' />

  if (rows.length === 0) {
    return <NoData message={message} />
  }

  return children
}

export default function Table({
  title,
  loading = false,
  error,
  columns,
  data,
  emptyMessage,
  showSearch,
  onSearch,
  buttons = [],
  onRowClicked,
  rowsPerPageOptions = [10, 20, 30, 40, 50],
  sx = {},
}) {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0])

  const [cols, setCols] = useState([])
  const [rows, setRows] = useState([])

  useEffect(() => {
    if (columns) {
      setCols(columns)
    }
  }, [columns])

  useEffect(() => {
    if (data) {
      setRows(data)
    }
  }, [data])

  const handleSearch = (value) => {
    if (onSearch) return onSearch(value)

    const filteredRows = (data || []).filter((row) =>
      JSON.stringify(row).toLowerCase().includes(value.toLowerCase())
    )

    if (filteredRows.length > 0) {
      setRows(filteredRows)
    }
  }

  const flexSX = useMemo(() => {
    return buttons.length === 0 ? { flex: '1' } : {}
  }, [buttons])

  return (
    <Box sx={sx}>
      {title && (
        <Typography variant='h6' sx={{ my: 2 }}>
          {title}
        </Typography>
      )}

      <ButtonsContainer>
        {buttons.length > 0 && (
          <Stack spacing={1} direction='row'>
            {buttons.map((button, index) => (
            <Button key={index} size='small' variant='outlined' sx={{ borderRadius: 5 }} {...button} />
            ))}
          </Stack>
        )}
        {showSearch && rows.length > 0 ? (
          <StyledSearch onSearch={handleSearch} sx={{ ...flexSX }} />
        ) : null}
      </ButtonsContainer>

      <TableContainer
        loading={loading}
        error={error}
        rows={rows}
        message={emptyMessage}
      >
        <TableBody
          cols={cols}
          rows={rows}
          rowsPerPage={rowsPerPage}
          page={page}
          onRowClicked={onRowClicked}
        />

        <TablePagination
          rows={rows}
          page={page}
          setPage={setPage}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          rowsPerPageOptions={rowsPerPageOptions}
        />
      </TableContainer>
    </Box>
  )
}

Table.propTypes = {
  title: PropTypes.string,
  loading: PropTypes.bool,
  error: PropTypes.any,
  columns: PropTypes.arrayOf(PropTypes.object),
  data: PropTypes.arrayOf(PropTypes.object),
  emptyMessage: PropTypes.string,
  showSearch: PropTypes.bool,
  onSearch: PropTypes.func,
  buttons: PropTypes.arrayOf(PropTypes.object),
  onRowClicked: PropTypes.func,
  rowsPerPageOptions: PropTypes.arrayOf(PropTypes.number),
  sx: PropTypes.object,
}

Table.defaultProps = {
  title: '',
  loading: false,
  error: null,
  columns: [],
  data: [],
  emptyMessage: '',
  showSearch: false,
  onSearch: null,
  buttons: [],
  onRowClicked: null,
  rowsPerPageOptions: [10, 20, 30, 40, 50],
  sx: {},
}

TableContainer.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  rows: PropTypes.arrayOf(PropTypes.object),
  message: PropTypes.string,
  children: PropTypes.node,
}

NoData.propTypes = {
  message: PropTypes.string,
}


export {TableContainer, NoData, TablePagination,  Table}