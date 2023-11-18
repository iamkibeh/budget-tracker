import PropTypes from 'prop-types'
import { NavLink, } from "react-router-dom"
import { navMenus } from "../../utils/navMenus"
import { Divider, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, styled } from "@mui/material"
import { List } from "@mui/material"
import { IconButton } from "@mui/material"
import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/24/solid'
import MuiDrawer from '@mui/material/Drawer'
import {Logout } from '@mui/icons-material'
import Logo from '../reusables/Logo'




const drawerWidth = 240

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  backgroundColor: theme.palette.secondary.main,
})

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
    backgroundColor: theme.palette.secondary.main,
})

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}))

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}))


 

const SideBar = ({
    open,
    handleDrawerClose,
    secondaryListItems,
    handleDrawerOpen,
    navigateHome
}) => {

  

    return (
      <>
        <Drawer variant='permanent' open={open}>
          <DrawerHeader className='bg-primary-color'>
            <Typography
              variant='h6'
              noWrap
              onClick={navigateHome}
              className='cursor-pointer'
            >
              <Logo />
            </Typography>
            {
                open ? (
                    <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon className='w-5 h-5' />
                    </IconButton>
                ) : (
                    <IconButton onClick={handleDrawerOpen}>
                    <ChevronRightIcon className='w-5 h-5' />
                    </IconButton>
                )
            }
          </DrawerHeader>
          <Divider />
          <List>
            {navMenus.map((menu) => (
              <NavLink
                key={menu.text}
                to={menu.path}
                className='text-gray-800 no-underline block'
              >
                <ListItem disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                      {menu.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={menu.text}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
              </NavLink>
            ))}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
            <Divider sx={{ my: 1 }} />
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
                disabled={true}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <Logout />
                </ListItemIcon>
                <ListItemText primary='Logout' sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
      </>
    )
}

export default SideBar

SideBar.propTypes = {
    open: PropTypes.bool.isRequired,
    handleDrawerClose: PropTypes.func.isRequired,
    secondaryListItems: PropTypes.object.isRequired,
    handleDrawerOpen: PropTypes.func.isRequired,
    navigateHome: PropTypes.func.isRequired
}
