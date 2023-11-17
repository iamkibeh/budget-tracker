import HomeIcon from '@mui/icons-material/Home'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AssignmentIcon from '@mui/icons-material/Assignment'


export const navMenus = [
  {
    text: 'Dashboard',
    icon: <HomeIcon />,
    path: '/',
  },
  {
    text: 'Transactions',
    icon: <ShoppingCartIcon />,
    path: '/transactions',
  },
  {
    text: 'Reports',
    icon: <AssignmentIcon />,
    path: '/reports',
  },
  {
    text: 'Accounts',
    icon: <AccountCircleIcon />,
    path: '/accounts',
  },
]
