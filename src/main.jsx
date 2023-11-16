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
            '&.Mui-focused fieldset': {
              borderColor: '#957FF6',
            },
            '&:hover fieldset': {
              borderColor: '#957FF6',
              borderWidth: '1px',
            },
            '& fieldset:focus': {
              // borderColor: '#957FF6',
            },
            '&.Mui-focused .MuiInputLabel-outlined': {
              color: '#957FF6',
            },
          },
          '& .MuiInputLabel-outlined.Mui-focused': {
            color: '#957FF6',
            borderBottomColor: '#957FF6',
          },
          '& .MuiInputLabel-filled': {
            color: 'gray',
          },
          '& .MuiInputLabel-filled.Mui-focused': {
            color: 'gray',
            borderBottomColor: 'transparent',
          },
          '& .MuiFilledInput-root:after': {
            borderColor: '#957FF6',
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
