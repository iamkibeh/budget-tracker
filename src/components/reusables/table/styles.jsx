/* eslint-disable react/prop-types */
import styled from '@emotion/styled'
import { Search as SearchIcon } from '@mui/icons-material'
import { Box } from '@mui/material'

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: none;
  thead {
    tr {
      border: none;
      th {
        padding: 8px;
        font-weight: 500;
        font-size: 14px;
        color: #202124;
        text-align: left;
        background-color: #f0f0f0;
        :first-of-type {
          border-top-left-radius: 10px;
        }
        :last-of-type {
          border-top-right-radius: 10px;
        }
      }
    }
  }
  tbody {
    tr {
      margin: 0 5px;
      transition: 0.3s;
      :nth-of-type(even) {
        background-color: #f9f9f9;
      }
      td {
        padding: 12px 8px;
        font-size: 0.8rem;
      }
    }
    tr:hover {
      cursor: pointer;
      background-color: #eeeeee;
    }
    tr:last-of-type {
      td {
        :first-of-type {
          border-bottom-left-radius: 10px;
        }
        :last-of-type {
          border-bottom-right-radius: 10px;
        }
      }
    }
  }
`

const Icon = styled(SearchIcon)`
  color: #949494;
  font-size: 0.9rem;
  font-weight: 400;
`

const SearchBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 15px;
  box-shadow: 0 0 3px 0 #dfdfdf;
  padding: 0.3rem 0.5rem;
  overflow: hidden;
  input {
    border: none;
    outline: none;
    font-size: 0.8rem;
    font-weight: 400;
    color: #333333;
    background-color: transparent;
    flex: 1;
    margin-left: 0.2rem;
    margin-right: 0.5rem;
  }
`

export const StyledSearch = ({ onSearch, sx }) => {
  return (
    <SearchBox sx={sx}>
      <Icon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
      <input
        type='text'
        placeholder='Search...'
        onChange={(e) => onSearch(e.target.value)}
      />
    </SearchBox>
  )
}

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  align-items: center;
`
