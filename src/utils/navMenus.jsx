import HomeIcon from '@mui/icons-material/Home'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import SettingsIcon from '@mui/icons-material/Settings'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

export const navMenus = [
  {
    text: 'Home',
    icon: <HomeIcon />,
    path: '/',
  },
  {
    text: 'Products',
    icon: <ShoppingCartIcon />,
    path: '/dashboard/products',
  },
  {
    text: 'Accounts',
    icon: <AccountCircleIcon />,
    path: '/dashboard/accounts',
  },
  {
    text: 'Settings',
    icon: <SettingsIcon />,
    path: '/dashboard/settings',
  },
]
