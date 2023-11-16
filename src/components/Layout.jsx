import { Box, Container, useMediaQuery } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'
import { Outlet, useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react'
import SideBar from './dashboard/SideBar'
import { secondaryListItems } from './reusables/ListItems'
import NavBar from './dashboard/NavBar'

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}))

const Layout = () => {
  const theme = useTheme()
  const [open, setOpen] = React.useState(true)
  const navigate = useNavigate()
  const navigateHome = () => {
    navigate('/')
  }

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  useEffect(() => {
    const handleResize = () => {
      if (isMobile) {
        setOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isMobile])

  return (
    <>
      <div className='flex'>
        <NavBar
          navigateHome={navigateHome}
          handleDrawerOpen={handleDrawerOpen}
          handleDrawerClose={handleDrawerClose}
          open={open}
        />
        <SideBar
          open={open}
          handleDrawerOpen={handleDrawerOpen}
          handleDrawerClose={handleDrawerClose}
          secondaryListItems={secondaryListItems}
          navigateHome={navigateHome}
        />
        <>
          <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
            <Container maxWidth='xl' sx={{ pt: 4, mb: 4 }}>
              <Outlet />
            </Container>
          </Box>
        </>
      </div>
    </>
  )
}

export default Layout
