import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { StyledEngineProvider, ThemeProvider, createTheme } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)

const theme = createTheme({
  components: {
    MuiPopover: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiPopper: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiDialog: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiModal: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            height: '40px',
            '&.Mui-focused fieldset': {
              borderColor: '#2c3e50',
            },
            '&:hover fieldset': {
              borderColor: '#2c3e50',
              borderWidth: '1px',
            },
            '& fieldset:focus': {
              // borderColor: '#2c3e50',
            },
            '&.Mui-focused .MuiInputLabel-outlined': {
              color: '#2c3e50',
            },
            '& .MuiSelect-root': {
              height: '40px',
            }
          },
          '& .MuiInputLabel-outlined.Mui-focused': {
            height: '40px',
            color: '#2c3e50',
            borderBottomColor: '#2c3e50',
          },
          '& .MuiInputLabel-filled': {
            color: 'gray',
          },
          '& .MuiInputLabel-filled.Mui-focused': {
            color: 'gray',
            borderBottomColor: 'transparent',
          },
          '& .MuiFilledInput-root:after': {
            borderColor: '#2c3e50',
          },

          '& .MuiInputLabel-outlined': {
            transform: 'translate(14px, 10px) scale(1)',
          },
          '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
            transform: 'translate(14px, -6px) scale(0.75)',
          },


        },
      },
    },
  },
  palette: {
    secondary: {
      main: '#F0F7EE',
    },
    primary: {
      main: '#2c3e50',
    },
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
})

root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
)
