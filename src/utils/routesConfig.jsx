import Layout from '../components/Layout'
import DashboardHomePage from '../components/dashboard/DashboardHomePage'
import Transactions from '../components/dashboard/transactions'

export const routesConfig = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <DashboardHomePage /> },
      {
        path: '/reports',
        element: <h1>Reports</h1>,
      },
      {
        path: '/transactions',
        element:<Transactions />,
      },
      {
        path: '/accounts',
        element: <h1>Accounts</h1>,
      },
    ],
  },
]
