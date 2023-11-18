import HomeIcon from '@mui/icons-material/Home'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import AssignmentIcon from '@mui/icons-material/Assignment'
import { PaidOutlined } from '@mui/icons-material'


export const navMenus = [
  {
    text: 'Dashboard',
    icon: <HomeIcon />,
    path: '/',
  },
  {
    text: 'Transactions',
    icon: <PaidOutlined />,
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
