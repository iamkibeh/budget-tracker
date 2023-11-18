import PropTypes from 'prop-types'
import { StyledTable } from './styles'

const TableBody = ({ cols, rows, rowsPerPage, page, onRowClicked }) => {
  const handleRowClicked = (col, item) => {
    if (col.button) {
      return
    }
    if (onRowClicked) {
      onRowClicked(item)
    }
  }

  const getColumnValue = (column, item) => {
    if (typeof column.selector === 'function') {
      return column.selector(item)
    }

    return item[column.selector]
  }

  return (
    <StyledTable>
      <thead>
        <tr>
          {cols.map((column, cIndex) => (
            <th key={cIndex}>{column.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((item, rIndex) => {
            return (
              <tr key={rIndex}
            //   style based on category, if not income should be red
                className={item.type !== 'income' ? 'text-red-500' : ''}
              >
                {cols.map((column, cIndex) => (
                  <td
                    key={cIndex}
                    style={column?.style || {}}
                    onClick={() => handleRowClicked(column, item)}
                  >
                    {getColumnValue(column, item)}
                  </td>
                ))}
              </tr>
            )
          })}
      </tbody>
    </StyledTable>
  )
}

export default TableBody

TableBody.propTypes = {
  cols: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  onRowClicked: PropTypes.func,
}
